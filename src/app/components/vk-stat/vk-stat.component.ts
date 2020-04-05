import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageCountInfo } from '../../data/MessageCountInfo';
import { MatTableDataSource } from '@angular/material/table';
import { MessageCountService } from "../../services/message-count.service";
import { DuringTimeService } from "../../services/during-time.service";
import { DuringTimeInfo } from '../../data/DuringTimeInfo';
import { timer } from 'rxjs';
import { VkMessageSenderService } from "../../services/vk-message-sender.service";

@Component({
  selector: 'app-vk-stat',
  templateUrl: './vk-stat.component.html',
  styleUrls: ['./vk-stat.component.css']
})
export class VkStatComponent implements OnInit {

  public messageCountInfos: MessageCountInfo[];

  public meDataSource: MatTableDataSource<MessageCountInfo>;
  public youDataSource: MatTableDataSource<MessageCountInfo>;

  public isShowSpinner: boolean = true;
  public duringTimeInfo: DuringTimeInfo;

  constructor(
    private messageCountService: MessageCountService,
    private duringTimeService: DuringTimeService,
    private vkMessageSenderService: VkMessageSenderService) {
    this.messageCountInfos = [];
  }

  async sendMessage() {
    this.vkMessageSenderService.sendMessage();
  }

  oberserableTimer() {
    const source = timer(1000, 1000);
    source.subscribe(val => {
      if (this.duringTimeInfo.second == 59) {
        this.duringTimeInfo.second = 0;
        this.duringTimeInfo.minute++;

        if (this.duringTimeInfo.minute == 60) {
          this.duringTimeInfo.hour++;
          this.duringTimeInfo.minute = 0;
          this.duringTimeInfo.second = 0;
        }

        if (this.duringTimeInfo.minute == 59 && this.duringTimeInfo.second == 59) {
          this.duringTimeInfo.minute = 0;
          this.duringTimeInfo.second = 0;
          this.duringTimeInfo.hour++;
        }
      }

      else this.duringTimeInfo.second++;
    });
  }

  ngOnInit() {
    this.messageCountService.getDefaultMessageCountInfos().subscribe(data => {
      this.messageCountInfos = data;

      this.youDataSource = new MatTableDataSource(this.messageCountInfos.filter(mci => mci.author == "A"));
      this.meDataSource = new MatTableDataSource(this.messageCountInfos.filter(mci => mci.author == "I"));

      this.isShowSpinner = false;
    });

    this.duringTimeService.getDuringTimeInfo().subscribe(data => {
      this.duringTimeInfo = new DuringTimeInfo();

      this.duringTimeInfo.hour = data.hour;
      this.duringTimeInfo.minute = data.minute;
      this.duringTimeInfo.second = data.second;

      this.oberserableTimer();            
    });
  }

}
