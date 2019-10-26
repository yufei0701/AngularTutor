import { Component } from '@angular/core';
import { Student } from '../../shared/student.model';

@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  beefFlag = false;
  porkFlag = false;
  chickenFlag = false;
  shrimpFlag = false;
  fishFlag = false;
  tomatoFlag = false;
  potatoFlag = false;
  brocoFlag = false;
  bokFlag = false;
  pepFlag = false;
  eggFlag = false;
  tofuFlag = false;
  isCook = false;
  result = 'You Failed....';
  imgSrc = 'https://pulptastic2-h' +
    'omamedialtd.netdna-ssl.com/wp-content/uploads/2017/02/funny-kitchen-cooking-fails-145-58984ebd92f65__605.jpg';
  imgAlt = 'Boom';
  cnt = 0;
  checkBeef() {
    this.beefFlag = !this.beefFlag;
    if (this.beefFlag) {
      this.cnt++;
    } else {
      this.cnt--;
    }
  }
  checkPork() {
    this.porkFlag = !this.porkFlag;
    if (this.porkFlag) {
      this.cnt++;
    } else {
      this.cnt--;
    }
  }
  checkChicken() {
    this.chickenFlag = !this.chickenFlag;
    if (this.chickenFlag) {
      this.cnt++;
    } else {
      this.cnt--;
    }
  }
  checkShrimp() {
    this.shrimpFlag = !this.shrimpFlag;
    if (this.shrimpFlag) {
      this.cnt++;
    } else {
      this.cnt--;
    }
  }
  checkFish() {
    this.fishFlag = !this.fishFlag;
    if (this.fishFlag) {
      this.cnt++;
    } else {
      this.cnt--;
    }
  }
  checkTomato() {
    this.tomatoFlag = !this.tomatoFlag;
    if (this.tomatoFlag) {
      this.cnt++;
    } else {
      this.cnt--;
    }
  }
  checkPotato() {
    this.potatoFlag = !this.potatoFlag;
    if (this.potatoFlag) {
      this.cnt++;
    } else {
      this.cnt--;
    }
  }
  checkBrocolli() {
    this.brocoFlag = !this.brocoFlag;
    if (this.brocoFlag) {
      this.cnt++;
    } else {
      this.cnt--;
    }
  }
  checkBok() {
    this.bokFlag = !this.bokFlag;
    if (this.bokFlag) {
      this.cnt++;
    } else {
      this.cnt--;
    }
  }
  checkPep() {
    this.pepFlag = !this.pepFlag;
    if (this.pepFlag) {
      this.cnt++;
    } else {
      this.cnt--;
    }
  }
  checkEgg() {
    this.eggFlag = !this.eggFlag;
    if (this.eggFlag) {
      this.cnt++;
    } else {
      this.cnt--;
    }
  }
  checkTofu() {
    this.tofuFlag = !this.tofuFlag;
    if (this.tofuFlag) {
      this.cnt++;
    } else {
      this.cnt--;
    }
  }
  reset() {
    this.beefFlag = false;
    this.porkFlag = false;
    this.chickenFlag = false;
    this.shrimpFlag = false;
    this.fishFlag = false;
    this.tomatoFlag = false;
    this.potatoFlag = false;
    this.brocoFlag = false;
    this.bokFlag = false;
    this.pepFlag = false;
    this.eggFlag = false;
    this.tofuFlag = false;
    this.isCook = false;
    this.cnt = 0;
  }
  cook() {
    this.isCook = true;
    if (this.cnt <= 1) {
      this.result = 'You have to add at least two ingredients';
      this.imgSrc = 'http://www.topenterprise.sg/wp-content/uploads/35d808a060821697_POLL.jpg';
      this.imgAlt = 'Not Enough Food';
    } else if (!this.beefFlag && !this.porkFlag && !this.chickenFlag && !this.shrimpFlag
        && !this.fishFlag && !this.tomatoFlag && !this.potatoFlag && !this.brocoFlag
        && this.bokFlag && !this.pepFlag && !this.eggFlag && this.tofuFlag) {
      this.result = '青菜豆腐汤';
      this.imgSrc = 'http://www.xiaochuw.com/cp_upload/2018/s_20180731122440430.jpg';
      this.imgAlt = '青菜豆腐汤';
    } else if (!this.beefFlag && !this.porkFlag && !this.chickenFlag && this.shrimpFlag
      && !this.fishFlag && !this.tomatoFlag && !this.potatoFlag && !this.brocoFlag
      && !this.bokFlag && !this.pepFlag && this.eggFlag && !this.tofuFlag) {
      this.result = '虾仁炒蛋';
      this.imgSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOf91meQ1twx6u4dO1RIeTeokYJdrtEaPcGYnInv27VUtFY9ir';
      this.imgAlt = '虾仁炒蛋';
    } else if (!this.beefFlag && !this.porkFlag && !this.chickenFlag && !this.shrimpFlag
      && !this.fishFlag && this.tomatoFlag && !this.potatoFlag && !this.brocoFlag
      && !this.bokFlag && !this.pepFlag && this.eggFlag && !this.tofuFlag) {
      this.result = '番茄炒蛋';
      this.imgSrc = 'https://resource01-proxy.ulifestyle.com.hk/res/v3/image/content/1995000/1996511/Cover_1024.png';
      this.imgAlt = '番茄炒蛋';
    } else if (!this.beefFlag && this.porkFlag && !this.chickenFlag && !this.shrimpFlag
      && !this.fishFlag && !this.tomatoFlag && !this.potatoFlag && !this.brocoFlag
      && !this.bokFlag && this.pepFlag && !this.eggFlag && !this.tofuFlag) {
      this.result = '青椒肉丝';
      this.imgSrc = 'http://i2.chuimg.com/f05274c5dd5f4832a3093b79e7662ccf_1500w_1124h.jpg?imageView2/2/w/660/interlace/1/q/90';
      this.imgAlt = '青椒肉丝';
    } else if (!this.beefFlag && !this.porkFlag && !this.chickenFlag && !this.shrimpFlag
      && !this.fishFlag && !this.tomatoFlag && this.potatoFlag && !this.brocoFlag
      && !this.bokFlag && this.pepFlag && !this.eggFlag && !this.tofuFlag) {
      this.result = '青椒土豆丝';
      this.imgSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7SYLxOYn-BJXk0pWP7b1K7XOGEe0wjumHkhhvXXgKFmUW_mX';
      this.imgAlt = '青椒土豆丝';
    } else if (!this.beefFlag && !this.porkFlag && !this.chickenFlag && !this.shrimpFlag
      && this.fishFlag && !this.tomatoFlag && !this.potatoFlag && !this.brocoFlag
      && !this.bokFlag && !this.pepFlag && !this.eggFlag && this.tofuFlag) {
      this.result = '豆花鱼';
      this.imgSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHNwy1uKgp0hdFaaOCguXvo5BME5kC9O5DaGHFmBf0zSlbA2ZZ3A';
      this.imgAlt = '豆花鱼';
    } else if (!this.beefFlag && !this.porkFlag && this.chickenFlag && !this.shrimpFlag
      && !this.fishFlag && !this.tomatoFlag && this.potatoFlag && !this.brocoFlag
      && !this.bokFlag && !this.pepFlag && !this.eggFlag && !this.tofuFlag) {
      this.result = '土豆烧鸡';
      this.imgSrc = 'http://i2.chuimg.com/053dfdea895411e6b87c0242ac110003_620w_380h.jpg?imageView2/2/w/660/interlace/1/q/90';
      this.imgAlt = '土豆烧鸡';
    } else if (this.beefFlag && !this.porkFlag && !this.chickenFlag && !this.shrimpFlag
      && !this.fishFlag && !this.tomatoFlag && this.potatoFlag && !this.brocoFlag
      && !this.bokFlag && !this.pepFlag && !this.eggFlag && !this.tofuFlag) {
      this.result = '土豆牛腩';
      this.imgSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLEcnC0oLftSVWv0RgqeInfB2wRis8mEmQEI1w8XJ-62URmBX';
      this.imgAlt = '土豆牛腩';
    } else if (this.beefFlag && !this.porkFlag && !this.chickenFlag && !this.shrimpFlag
      && !this.fishFlag && !this.tomatoFlag && !this.potatoFlag && this.brocoFlag
      && !this.bokFlag && !this.pepFlag && !this.eggFlag && !this.tofuFlag) {
      this.result = 'Broccoli Beef';
      this.imgSrc = 'https://iowagirle' +
        'ats-iowagirleats.netdna-ssl.com/wp-content/uploads/2016/10/Gluten-Free-Broccoli-Beef-iowagirleats-01b.jpg';
      this.imgAlt = 'Broccoli Beef';
    } else if (!this.beefFlag && !this.porkFlag && this.chickenFlag && !this.shrimpFlag
      && !this.fishFlag && !this.tomatoFlag && !this.potatoFlag && this.brocoFlag
      && !this.bokFlag && !this.pepFlag && !this.eggFlag && !this.tofuFlag) {
      this.result = 'Broccoli Chicken';
      this.imgSrc = 'https:' +
        '//food.fnr.sndimg.com/content/dam/images/food/full' +
        'set/2004/5/14/0/bw2c12_chicken_broccoli2.jpg.rend.hg' +
        'tvcom.826.620.suffix/1371584021202.jpeg';
      this.imgAlt = 'Broccoli Chicken';
    } else {
      this.result = 'You Failed!....';
      this.imgSrc = 'https://pulptastic2-homamedialtd.netdna' +
        '-ssl.com/wp-content/uploads/2017/02/funny-kitchen-cooking-fails-145-58984ebd92f65__605.jpg';
      this.imgAlt = 'Boom';
    }
  }
}
