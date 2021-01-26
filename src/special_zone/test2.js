/*
 * @Author: your name
 * @LastEditors: xiasong
 * @Date: 2021-01-26 16:01:07
 * @LastEditTime: 2021-01-26 16:03:44
 * @Description: description
 * @FilePath: \THREEDEMO\src\special_zone\test2.js
 */

(function () {
  class Template {
    // 单例模式
    static getInstance() {
      if (!Template.instance) Template.instance = new Template();
      return Template.instance;
    }

    // 私有变量
    #mockData = {
      des:
        "2021年各行各业数字化转型全面提速，河南联通发挥央企优势，践行央企担当，携手阿里、腾讯、新华三等龙头企业，推出2021数字河南D计划——“千万补贴，助推河南数字化转型”公有云专项促销活动，免费试用、优惠打折、订购赠送，降本增效，助力企业腾飞！",
      date: "2021年1月1日-4月30日",
      productList: [
        {
          title: "企业上云类",
          subTitle: "按需付费，轻资产上阵",
          des: "云主机、数据库、安全等基础产品助力企业轻松上云。",
          unitList: [
            {
              title: "",
              des: "",
              link: "",
              unitAtom: [
                {
                  title: "补贴政策",
                  des: "(限联通和阿里共建的合营云呼和 浩特节点)",
                  moreInfo: [
                    "ECS低至6折!",
                    "数据库产品低至6.8折!",
                    "云防火墙低至7.65折!",
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "营销升级类",
          subTitle: "聚客引流",
          des: "",
          unitList: [
            {
              title: "附近推",
              des:
                "将门店优惠卡卷快速推给周边用户，以朋友圈广告卡片的形式呈现，用户点击卡片即可快速领取，迅速让周边用户了解门店信息及最新活动。",
              link: "",
              unitAtom: [
                {
                  title: "补贴政策",
                  des: "",
                  moreInfo: ["买即送素材制作、精修!"],
                },
              ],
            },
            {
              title: "沃客来精准营销平台",
              des:
                "为企业提供基于微信朋友圈、抖音和今日头条等平台的营销广告服务。",
              link: "",
              unitAtom: [
                {
                  title: "补贴政策",
                  des: "",
                  moreInfo: ["订单金额大于5000即送素材制作或10%曝光量!"],
                },
              ],
            },
            {
              title: "社区云广告",
              des:
                "通过线上方式方便投放线下电梯广告，为社区周边商户提供简单便捷的一站式的营销解决方案。",
              link: "",
              unitAtom: [
                {
                  title: "补贴政策",
                  des: "",
                  moreInfo: ["大量适用券免费领取，先到先得!"],
                },
              ],
            },
            {
              title: "多端小程序",
              des:
                "多端小程序是基于超级平台(微信、支付宝、百度)无需下载、即点即用的轻量化APP，可帮助企业获客引流，提能管理效率。",
              link: "",
              unitAtom: [
                {
                  title: "补贴政策",
                  des: "",
                  moreInfo: ["所有解决方案买一年送一年，赠送两个营销插件!"],
                },
              ],
            },
          ],
        },
        {
          title: "管理升级类",
          subTitle: "降本增效",
          des: "",
          unitList: [
            {
              title: "云办公",
              des:
                "云端部署的办公协同软件，实现了消息、任务、知识和人的互联，是全面、完整的协同应用解决方案和组织基于互联网的工作平台。",
              link: "https://gec.10010.com/p/product/1000722",
              unitAtom: [
                {
                  title: "补贴政策",
                  des: "",
                  moreInfo: ["20人版免费试用!"],
                },
              ],
            },
            {
              title: "联通政企邮箱",
              des: "以您公司域名作为后缀的电子邮件，是企业形象提升的利器。",
              link: "",
              unitAtom: [
                {
                  title: "补贴政策",
                  des: "",
                  moreInfo: ["免费申请3个月试用!"],
                },
              ],
            },
            {
              title: "无纸化电子会议",
              des:
                "包含会议管理、与会人员管理、议题管理、文件管理、文件同步阅读、文件批注、投票和签到等功能的高效",
              link: "",
              unitAtom: [
                {
                  title: "补贴政策",
                  des: "",
                  moreInfo: ["License买五送一，多买多送!"],
                },
              ],
            },
            {
              title: "云监控",
              des:
                "即满足个人用户看家护院刚需，又满足政府综治、安防、创卫、平安乡村、平安社区建设要求的视频监控平台。",
              link: "https://gec.10010.com/p/product/1001269",
              unitAtom: [
                {
                  title: "补贴政策",
                  des: "",
                  moreInfo: ["订购即送视频汇聚!"],
                },
              ],
            },
            {
              title: "AI党建云标准版",
              des:
                "专为党组织打造的集“宣传、管理、教育、服务、沟通、考核”于一体的智慧党建云平台，可以支持随时随地开展党建工作，提升党建信息化智能化水平。",
              link: "https://gec.10010.com/p/product/1001262",
              unitAtom: [
                {
                  title: "补贴政策",
                  des: "",
                  moreInfo: [
                    "1、赠送10%人数扩容；",
                    "2、对应版本的数据驾驶舱免费使 用半年！",
                  ],
                },
              ],
            },
            {
              title: "白泽舆情",
              des:
                "将用户关注的互联网信息，社会热点问题等时时反馈，及时掌握舆情可极大提高客户在互联网信息工作的主动性，便于快速调整宣传方向。",
              link: "",
              unitAtom: [
                {
                  title: "补贴政策",
                  des: "",
                  moreInfo: ["原价2.4万/每年补贴后优惠价为 2万/每年！"],
                },
              ],
            },
          ],
        },
        {
          title: "安全升级类",
          subTitle: "网络无忧",
          des: "",
          unitList: [
            {
              title: "H3C安全产品",
              des:
                "满足企业客户七层网络安全防护、保障客户业务带宽和网络访问的稳定性的的服务。",
              link: "https://gec.10010.com/p/product/1001261",
              unitAtom: [
                {
                  title: "补贴政策",
                  des: "",
                  moreInfo: [
                    "客户办理H3C安全产品（下一代防火墙、上网行为管理、日志审计、堡垒机任意一款包年套餐",
                  ],
                },
              ],
            },
            {
              title: "联通云盾DDoS防护",
              des:
                "中国联通为互联网专线、IDC等客户提供的专业安全服务，包括攻击监测、攻击防护（流量清洗和封堵）、攻击溯源、个性防护方案定制等服务。",
              link: "https://gec.10010.com/p/product/1001875",
              unitAtom: [
                {
                  title: "补贴政策",
                  des: "",
                  moreInfo: ["订购赠送“域名无忧”安全服务!"],
                },
              ],
            },
            {
              title: "慧御云防护",
              des:
                "优质的网站安全云防护系统，为网站提供包含云WAF、云抗D、云加速、DNS防护等解决方案级产品，让您的网站在互联网中遨游而无所畏惧。",
              link: "https://gec.10010.com/p/product/1001271",
              unitAtom: [
                {
                  title: "补贴政策",
                  des: "",
                  moreInfo: ["买一年，赠一月使用时长!"],
                },
              ],
            },
          ],
        },
      ],
    };

    constructor(target, data) {
      this.target = target;
      this.data = data;

      this.isPc = false;
      this.init();
    }

    // 初始加载器
    init() {
      this.onWindowResize();
      Promise.resolve()
        .then(() => {
          if (!this.target) {
            this.createTargetEle();
          }
        })
        .then(() => this.domRender());
    }

    createTargetEle() {
      const target = document.createElement("div");
      target.id = `gec${guid()}`; // 假如没有 target 生成一个唯一的id 的div
      // document.body.appendChild(target);
      this.target = target;

      // 用于生成uuid
      function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      }
      function guid() {
        return (
          S4() +
          S4() +
          "-" +
          S4() +
          "-" +
          S4() +
          "-" +
          S4() +
          "-" +
          S4() +
          S4() +
          S4()
        );
      }
    }

    // 监听 窗口变化
    onWindowResize() {
      window.addEventListener("resize", this.handleResize);
      window.addEventListener("resize", this.domRender);
    }

    // 根究可视窗口的宽度大小来判断 isPc 的布尔值
    handleResize() {
      // console.log(1);
      const Width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      this.isPc = Width > 1400 ? true : false;
    }

    temRender() {
      const { des, date, productList = [] } = this.#mockData;

      return `
          <div style="width: 100%; height: 100%; background-color: #7D171D">
            <div style="width:100%" >
              <img
                src="https://gec.10010.com/multi/unified-storage/image/202101/21012511ca482e517181.jpg"
                style="width: 100%; display: block" />
            </div>
            <div style="width: 100%; height: auto; padding: 0 158px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; align-items: center" >
              <div style="color: #FFB100; display: flex; flex-direction: column; justify-content: center; align-items: center" >
                ${
                  des
                    ? `<div style="font-size: 35px; text-indent: 3rem; text-align: justify" > ${des} </div>`
                    : ""
                }
                ${
                  date
                    ? `<div style="font-size: 30px; padding-top: 60px" > <span>活动时间：</span>${date} </div>`
                    : ""
                }
              </div>
              ${this.domArrayRender(productList)}
            </div>
            <div style="width: 100%; height: fit-content; display: flex; justify-content: center; align-items: center; flex-direction: column; padding: 100px 0" >
              <img src="https://gec.10010.com/multi/unified-storage/image/202101/21012511d257dd276110.jpg" style="display: block" />
              <div style="color: #c79b9e; text-align: center; font-size: ${
                this.isPc ? "inherit" : "30px"
              }">
              <p style="margin: 10px auto" >如有所需，扫码后联通经理与您联系</p>
              <p>更多产品详询当地联通</p>
              </div>
            </div>
          </div>
        `;
    }

    // 处理map
    domArrayRender(data = []) {
      return data.map((item) => this.unitEleRender(item)).join("");
    }

    unitEleRender(unitData) {
      const { title, subTitle, des, unitList } = unitData;
      let curIsPc = this.isPc;
      let countHeight = changeHeight();

      // 计算每个元素自己的 高度
      function changeHeight() {
        let curHeight = 0;
        if (des) curHeight += 70;
        if (unitList && Array.isArray(unitList)) {
          unitList.forEach((item) => {
            if (item.title) curHeight += 63;
            if (item.des) curHeight += 190;
            if (item.unitAtom && Array.isArray(item.unitAtom)) {
              item.unitAtom.forEach((cItem) => {
                if (cItem.title) curHeight += 53;
                if (cItem.moreInfo && Array.isArray(cItem.moreInfo)) {
                  cItem.moreInfo.forEach((caItem) => {
                    if (caItem) curHeight += 66;
                  });
                }
              });
            }
          });
        }
        return curHeight;
      }

      // 选择每个模块(图片的)
      function selectPart(type) {
        const first = () => {
          return `<div style="width: 100%; position: absolute; top: 0; left: 4px" >
              <img src="https://gec.10010.com/multi/unified-storage/image/202101/2101251136e2ab974410.png" style="width: 100%" />
            </div>`;
        };

        const second = () => {
          const secDemo = (per) => {
            return `<div style="width: 100%; position: absolute; top: ${
              per ? per : "50%"
            };left: 4px" > <img src="https://gec.10010.com/multi/unified-storage/image/202101/21012511ac9b2a662919.png" style="width: 100%" /> </div>`;
          };

          let initialPer = [30];

          return initialPer.map((item) => secDemo(`${item}%`)).join("");
        };

        const three = () => {
          return `<div style="width: 100%; position: absolute; bottom: ${
            curIsPc ? "-120px" : 0
          }; left: 4px;"
          >
          <img  src="https://gec.10010.com/multi/unified-storage/image/202101/21012511c78de2717856.png" style="width: 100%" />
          </div>`;
        };

        if (!type) return null;
        if (type === "first") {
          return first();
        } else if (type === "three") {
          if (countHeight > 700) {
            return three();
          }
          return "";
        } else if (type === "second") {
          if (countHeight > 1700) {
            return second();
          }
          return "";
        }
      }

      return `<div style="width: 100%" >
            <div style="position: relative" >
              <img src="https://gec.10010.com/multi/unified-storage/image/202101/21012511a2228fe98581.jpg" style="display: block; width: 100%" />
              <div style="position: absolute; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%); color: #fff" >
                ${
                  title
                    ? `<p style="font-size: ${this.isPc ? "50px" : "40px"};
                                 text-align: center; margin-top: ${
                                   this.isPc ? 0 : "-6px"
                                 }"
                                  >${title}</p>`
                    : ""
                }
                ${
                  subTitle
                    ? `<p style="font-size: ${this.isPc ? "30px" : "25px"};
                                 text-align: center; margin-top: ${
                                   this.isPc ? "10px" : 0
                                 }" >${subTitle}</p>`
                    : ""
                }
              </div>
            </div>
            <div>
              <img src="https://gec.10010.com/multi/unified-storage/image/202101/21012511ec9326a96880.jpg" style="display: block; width: 100%" />
            </div>
            <div
              style="position: relative; background-image: url(${"https://gec.10010.com/multi/unified-storage/image/202101/210125118d5cc9189342.jpg"}); background-position: center; background-repeat: repeat; background-size: contain; width: 100%; height: fit-content; margin-left: ${
        curIsPc ? "-3px" : "-3px"
      }
                     "
            >
              ${selectPart("first")}
              ${selectPart("second")}
              ${selectPart("three")}
              <div style="width: 60%; margin: 0 auto; margin-top: -5%; position: relative; z-index:2" >
                ${
                  des
                    ? `<p style="color: #996666; font-size: 30px; padding-bottom: 30px" >${des}</p>`
                    : ""
                }
                <div>
                  <ul>
                    ${Array.from(
                      unitList && Array.isArray(unitList) ? unitList : [],
                      (item, index) => {
                        return `<li>
                            <a href="${item.link ? item.link : "#"}"
                               target="${item.link ? "_blank" : "_self"}"
                               style="display: block"
                            >
                              ${
                                item.title
                                  ? `<p style="display: flex; padding-top: 60px" >
                                      <span style="display: block; padding: 5px 15px; background-color: #C52518; color: #fff; border-radius: 5px; font-size: 40px" >${item.title}</span>
                                     </p>`
                                  : ""
                              }
                              ${
                                item.des
                                  ? `<p style="color: #996666; font-size: 30px; padding: 40px 0 30px" >${item.des}</p>`
                                  : ""
                              }
                              <ul>
                                ${Array.from(
                                  item.unitAtom && Array.isArray(item.unitAtom)
                                    ? item.unitAtom
                                    : [],
                                  (cItem, cIndex) => {
                                    return `<li>
                                        ${
                                          cItem.title
                                            ? `<p style="color: #3782C2; font-size: 40px" >${cItem.title}</p>`
                                            : ""
                                        }
                                        <ul style="font-size: 35px; color:#6A0300" >
                                          ${Array.from(
                                            cItem.moreInfo &&
                                              Array.isArray(cItem.moreInfo)
                                              ? cItem.moreInfo
                                              : [],
                                            (acItem, acIndex) => {
                                              return acItem
                                                ? `<li style="padding-top: 20px" >${acItem}</li>`
                                                : "";
                                            }
                                          ).join("")}
                                        </ul>
                                      </li>`;
                                  }
                                ).join("")}
                              </ul>
                            </a>
                          </li>`;
                      }
                    ).join("")}
                  </ul>
                </div>
              </div>
            </div>
            <div style="margin-left: -2px; margin-top: ${
              this.isPc ? 0 : "-2px"
            }" >
              <img src="https://gec.10010.com/multi/unified-storage/image/202101/21012511a27e657d2263.jpg" style="width: 100%; display: block" />
            </div>
           </div>
          `;
    }

    domRender() {
      this.target.innerHTML = this.temRender();
      //   console.log(this.target);
      document.body.appendChild(this.target);
    }
  }
  Promise.resolve()
    .then(() => {
      // 这里判断 是否获取到了 元素
      const target = document.getElementById("app");
      return target;
    })
    .then((res) => {
      //   console.log(res);
      Template.getInstance();
    })
    .catch((err) => {
      console.log(err);
    });
})();
