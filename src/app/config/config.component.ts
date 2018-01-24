import { Component, OnInit } from '@angular/core';
import { Config } from './config';
import { ConfigService } from './config.service';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  config = new Config();

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.getConfig();
  }

  getConfig(): void {
      this.configService.getConfig()
        .subscribe(config => this.config = config);
  }

}
