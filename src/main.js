import { createApp } from 'vue'
/*
 if imported component has dedicated style/or imported style in script, it transpiles to css and added to the head tag
   during compilation.
*/
// import './luxury.css'
import './luxury.js'

import BlurredCard from "./components/BlurredCard.vue";
import luxPart from "./components/LuxPart.vue";

const arrowIcon = '<svg class="arrow" width="24" height="24" role="img" aria-label="arrow"><use xlink:href="#arrow"/></svg>';

window.newArticle = createApp({
  // components: {
  //   BlurredCard
  // },
  data() {
    return {
      cardContent: {}
    }
  },
  methods: {
    updateCnt() {
      this.cardContent = data_json.newestArticles;    // an array
    },
  }
});
// alternative way to register a component. use this way or the above way.
// component name(or tag name) should be written in kebab case.
newArticle.component('blurred-card', BlurredCard);
newArticle.mount('#new_cards_wrap');

// --------------------------------------------------------------------------------------------------
window.luxuryParts = createApp({
  components: {
    luxPart
  },
  data() {
    return {
      luxContent: {},
      options: {
        rtl: true,
        margin: 10,
        nav: true,
        navText: [arrowIcon, arrowIcon],
        dots: false,
        items: 3,
        smartSpeed: 600,
      }
    }
  },
  provide: {
    content: {
      "fashion": [
        {
          "text": "اما این علامت سوال در ذهنم وجود داشت که وقتی سوالی از سمت طراح تجربهٔ کاربر یا مدیر محصول مطرح می‌شود، آیا روش‌های ",
          "title": "مد و پوشاک",
          "link": "/",
          "src": "https://www.fashiongonerogue.com/wp-content/uploads/2012/06/burberry-resort12.jpg"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://hosting.photobucket.com/albums/l340/ket747/accessories/AccessoriesAutumnWinter2011.jpg",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://garnil.club/uploads/posts/2023-01/1674692582_garnil-club-p-obrazi-na-mai-moda-vkontakte-36.jpg",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://i.pinimg.com/originals/fd/26/3e/fd263ed7b6c9a13f7af4907feb945e9d.jpg",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://garnil.club/uploads/posts/2023-01/1674692582_garnil-club-p-obrazi-na-mai-moda-vkontakte-36.jpg",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://i.pinimg.com/originals/fd/26/3e/fd263ed7b6c9a13f7af4907feb945e9d.jpg",
          "link": "/"
        }
      ],
      "beauty": [
        {
          "title": "آرایش و زیبایی",
          "text": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "link": "/",
          "src": "https://ia.tmgrup.com.tr/f6a43a/0/0/0/0/0/0?u=http://i.tmgrup.com.tr/cr/fotohaber/guzellik/guzellik-hatalariniza-basit-cozumler/makeup.jpg&mw=752"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://jooinn.com/images/beauty-63.jpg",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://i1.photo.2gis.com/images/branch/4/562949970982327_de6d.jpg",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://static.skillshare.com/uploads/parentClasses/88fc018d2b8bd1cbfdfc99cc0493bc90/44cf92e2",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://jooinn.com/images/beauty-63.jpg",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://i1.photo.2gis.com/images/branch/4/562949970982327_de6d.jpg",
          "link": "/"
        }
      ],
      "sports": [
        {
          "title": "ورزش و تفریح",
          "text": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "link": "/",
          "src": "https://4.bp.blogspot.com/-oDLNySmKufU/VlcF8ck6vfI/AAAAAAAAFZI/zdE1zPCsgnE/w800-h1024-c/artwork-female-runner-android-best-wallpaper.jpg"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://www.ickbgirls.com/wp-content/uploads/2015/03/sports_psychology.jpg",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://www.greenhillspeds.com/wp-content/uploads/2018/04/Sports-Physicals.jpg",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://w.forfun.com/fetch/cb/cbbe9344c2c9c067b6e5e67a7707f803.jpeg",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://porta-stor.com/wp-content/uploads/2018/11/Seasonal-Sports-Equipment-Storage.jpg",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://www.greenhillspeds.com/wp-content/uploads/2018/04/Sports-Physicals.jpg",
          "link": "/"
        }
      ],
      "Jewellery": [
        {
          "title": "جواهرات و زیورآلات",
          "text": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "link": "/",
          "src": "https://i.pinimg.com/originals/29/62/64/296264aafb6649bd4535298f548d5ea9.jpg"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://i.ytimg.com/vi/TsNjWEQSfLY/maxresdefault.jpg",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://www.detectagsafety.com/images/product/21557666604.jpg",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://luxurylifestyleawards.com/wp-content/uploads/2018/10/01_46.jpg",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://www.detectagsafety.com/images/product/21557666604.jpg",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://i.ytimg.com/vi/TsNjWEQSfLY/maxresdefault.jpg",
          "link": "/"
        }
      ],
      "modernCars": [
        {
          "title": "خودروهای لوکس",
          "text": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "link": "/",
          "src": "https://i.pinimg.com/736x/98/14/5c/98145ceee5b0a6f40986d03e8dc4266e.jpg"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://w.forfun.com/fetch/97/978b32be7585ceef597aeed1e8122899.jpeg?w=1470&r=0.5625",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://free4kwallpapers.com/uploads/originals/2016/10/09/renault-trezor-concept-4k-wallpaper.jpg",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://desarch.com/storage/969/clinton-township-car-showroom-full.jpg",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "\"https://w.forfun.com/fetch/97/978b32be7585ceef597aeed1e8122899.jpeg?w=1470&r=0.5625",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://free4kwallpapers.com/uploads/originals/2016/10/09/renault-trezor-concept-4k-wallpaper.jpg",
          "link": "/"
        }
      ],
      "modernHouse": [
        {
          "title": "خانه مدرن",
          "text": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "link": "/",
          "src": "https://i.pinimg.com/736x/4f/50/eb/4f50ebd065ef69cb91a35024d492390c.jpg"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://www.freshpalace.com/wp-content/uploads/2014/05/Living-Space-Sofas-Rug-Coffee-Table-Terrace-Pool-Luxurious-House-Johannesburg.jpg",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://emakar.ru/wp-content/uploads/2020/08/14-25.jpg",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://warisanlighting.com/wp-content/uploads/parser/modern-lounge-ceiling-lights-5.jpeg",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://www.freshpalace.com/wp-content/uploads/2014/05/Living-Space-Sofas-Rug-Coffee-Table-Terrace-Pool-Luxurious-House-Johannesburg.jpg",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://emakar.ru/wp-content/uploads/2020/08/14-25.jpg",
          "link": "/"
        }
      ],
      "accessory": [
        {
          "title": "اکسسوری",
          "text": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "link": "/",
          "src": "https://gentlemint-media.s3.amazonaws.com/images/2013/11/25/d884c720.jpg.757x975_q85.jpg"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://demo.moralthemes.com/pasaley-pro-home-3/wp-content/uploads/sites/18/2018/06/gadgets-336635_1920.jpg",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "http://1.bp.blogspot.com/-Ewafer8g3ts/T21AavlPH_I/AAAAAAAABVk/bYc2gm32vU8/s1600/atlanticpacific.JPG",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://images.creativemarket.com/0.1.0/ps/2645111/300/200/m2/fpc/wm0/trjgowqixorkephffwxekepq2wt4ijolrukr3cxlg8mtch7pxqdjfuicdog8ejum-.jpg?1493997113&s=9cd06304e6e89eae1f3fc1777f56cea4",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "https://demo.moralthemes.com/pasaley-pro-home-3/wp-content/uploads/sites/18/2018/06/gadgets-336635_1920.jpg",
          "link": "/"
        },
        {
          "title": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
          "date": "۱۴۰۲/11/۲۷",
          "src": "http://1.bp.blogspot.com/-Ewafer8g3ts/T21AavlPH_I/AAAAAAAABVk/bYc2gm32vU8/s1600/atlanticpacific.JPG",
          "link": "/"
        }
      ]
    }
  },
  methods: {
    updateCnt() {
      this.luxContent = data_json.luxuryCategories;    // an object
      // slice the object to get some items
      this.luxContent = Object.fromEntries(
        Object.entries(this.luxContent).slice(0, 4)
      );
    },
    removePart(partId) {
      delete this.luxContent[partId];
    }
  }
});
luxuryParts.mount('#luxParts');