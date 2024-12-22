import { Injectable } from '@nestjs/common';
import { CreateCrawlerDto } from './dto/create-crawler.dto';
import { UpdateCrawlerDto } from './dto/update-crawler.dto';
import axios from 'axios';
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CrawlerService {
  create(createCrawlerDto: CreateCrawlerDto) {
    return 'This action adds a new crawler';
  }

  findAll() {
    const baseUrl = `https://tieba.baidu.com/p/9335689703?frwh=index`;
    const getCrawlerData = async () => {
      const response = await axios.get(baseUrl);
      const result: string = response.data;
      // console.log(result); // 打印抓取到的 HTML 内容
      const $ = cheerio.load(result);
      const imgs = $('.p_content img').each(function (index, item) {
        // console.log($(this).attr('src'));
        console.log($(item).attr('src'));
      });
      // console.log('.imgs', imgs);
      /* const articles = $('.mhy-img-article'); // 获取所有匹配的元素
      console.log(articles.length); // 打印匹配到的元素数量
      articles.each(function (i, el) {
        console.log('测试', i, $(el).html()); // 打印每个元素的 HTML 内容
      }); */
    };
    getCrawlerData();
    return `This action returns all crawler`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crawler`;
  }

  update(id: number, updateCrawlerDto: UpdateCrawlerDto) {
    return `This action updates a #${id} crawler`;
  }

  remove(id: number) {
    return `This action removes a #${id} crawler`;
  }
}
