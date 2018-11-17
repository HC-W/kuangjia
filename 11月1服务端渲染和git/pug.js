const pug=require("pug");
const express=require("express");
let server=express();
server.listen(8024);

// 参数1：文件夹地址
// 参数2：配置项
let html=pug.renderFile("./template/pug/1.pug",{
    pretty:true,
    name:"苏宁易购",
    arr:{
        "sugGoods": [
            {
                "resCode": "01",
                "sceneId": "9-88",
                "parameter": "114818",
                "cityId": "025",
                "skus": [
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010638891060",
                        "sugGoodsName": "展卉 山东沾化冬枣1斤装 新鲜水果",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/upITao14woiHTHoWvcbxPw.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "拼购",
                        "promotionType": "501",
                        "promotionId": "2164d42bb9ba4fe1",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010142203",
                        "productType": "1",
                        "price": "6.80",
                        "refPrice": "13.80",
                        "catGroupId": "R9006667",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010224308737",
                        "sugGoodsName": "展卉 泰国进口椰青 9个装 单果约750g 配开椰器和吸管 冷藏热带水果 新鲜水果",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/dcph0dbVDY_CKvrPdiHktw.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "拼购",
                        "promotionType": "501",
                        "promotionId": "ae9a5aa66c724b8b",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010142203",
                        "productType": "1",
                        "price": "62.00",
                        "refPrice": "118.00",
                        "catGroupId": "R9006674",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010613665133",
                        "sugGoodsName": "大土澳 澳大利亚进口 澳洲脐橙 4颗装 单果160-190g",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/GuYsieIwI0QjkXRqdAU0MA.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "",
                        "promotionType": "",
                        "promotionId": "",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010148704",
                        "productType": "1",
                        "price": "120.00",
                        "refPrice": "",
                        "catGroupId": "R9006669",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010560944624",
                        "sugGoodsName": "佳沛zespri 新西兰进口阳光金奇异果 16粒礼盒装 单果重约90-100g 猕猴桃/奇异果 新鲜水果",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/oj6wk_Z9vbDvWh2V8Dbd_Q.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "拼购",
                        "promotionType": "501",
                        "promotionId": "f020113edfb548da",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010147239",
                        "productType": "1",
                        "price": "69.00",
                        "refPrice": "139.00",
                        "catGroupId": "R9006671",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010439026692",
                        "sugGoodsName": "展卉 甘肃静宁苹果 简装4个装 单果重量约180g-210g冷藏国产苹果类 新鲜水果",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/cthNFURQPgHpdHJqC_pkNw.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "拼购",
                        "promotionType": "501",
                        "promotionId": "ed3984884c5d48bb",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010142203",
                        "productType": "1",
                        "price": "11.80",
                        "refPrice": "23.80",
                        "catGroupId": "R9006666",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010577018847",
                        "sugGoodsName": "阿榴哥 泰国金枕头冷冻榴莲肉 300G*1盒装",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/Y7kW0SjVaipGr14jWC9PIg.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "拼购",
                        "promotionType": "501",
                        "promotionId": "f6fb38edd83a4ef5",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010144817",
                        "productType": "1",
                        "price": "23.80",
                        "refPrice": "48.80",
                        "catGroupId": "R9006689",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010613665130",
                        "sugGoodsName": "大土澳 国产 蜜柚 2颗盒装 红心柚白心柚各一颗 单果重量1150-1350g",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/e8RoRI9Rpq565hAI7cesVQ.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "",
                        "promotionType": "",
                        "promotionId": "",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010148704",
                        "productType": "1",
                        "price": "29.90",
                        "refPrice": "",
                        "catGroupId": "R9006662",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010215870367",
                        "sugGoodsName": "展卉 广西百香果 盒装12个装 单果50-80g 冷藏国产浆果类/核果类新鲜水果",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/OMw75i3k-rRxHrIIARwD9w.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "拼购",
                        "promotionType": "501",
                        "promotionId": "90727a5a991941b0",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010142203",
                        "productType": "1",
                        "price": "13.80",
                        "refPrice": "27.80",
                        "catGroupId": "R9006664",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010579229934",
                        "sugGoodsName": "展卉 新疆西州蜜哈密瓜 1个 简装 单果1.5kg以上 新鲜水果",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/tew3BFrF8DIRfFv4Gedp_w.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "苏宁抢购",
                        "promotionType": "12",
                        "promotionId": "11528281",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010142203",
                        "productType": "1",
                        "price": "23.60",
                        "refPrice": "24.80",
                        "catGroupId": "R9006663",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010521582983",
                        "sugGoodsName": "展卉 新疆库尔勒香梨 一级果 单果100-120g 1.5kg装 新鲜水果",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/i8zAwKd1vVCmtSCfVzCSPA.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "拼购",
                        "promotionType": "501",
                        "promotionId": "f66ee442bc634436",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010142203",
                        "productType": "1",
                        "price": "22.80",
                        "refPrice": "45.80",
                        "catGroupId": "R9006665",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010607830783",
                        "sugGoodsName": "展卉 黑糯玉米 6根装 约1200g 方便即食玉米 真空包装 新鲜蔬菜",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/RK7ysQugBRZmN75AgsSgsA.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "拼购",
                        "promotionType": "501",
                        "promotionId": "4caae803c65c43ba",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010142203",
                        "productType": "1",
                        "price": "17.80",
                        "refPrice": "36.80",
                        "catGroupId": "R9006180",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010566463024",
                        "sugGoodsName": "展卉国产 山东圣女果 小西红柿 番茄 简装 约500g 冷藏国产热带水果类 新鲜水果",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/8W4uxs9zGui0tXHipX5PTw.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "苏宁抢购",
                        "promotionType": "12",
                        "promotionId": "11528290",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010142203",
                        "productType": "1",
                        "price": "13.80",
                        "refPrice": "14.80",
                        "catGroupId": "R9006667",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010224072177",
                        "sugGoodsName": "展卉 泰国进口椰青 2个装 单果约750g 配开椰器和吸管 冷藏进口热带水果类 新鲜水果",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/UVoHmnkHqvDGhDILW5Kx5A.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "拼购",
                        "promotionType": "501",
                        "promotionId": "6fec17eba53844a7",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010142203",
                        "productType": "1",
                        "price": "13.80",
                        "refPrice": "29.80",
                        "catGroupId": "R9006674",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010574603624",
                        "sugGoodsName": "展卉 澳大利亚进口脐橙1kg装 冷藏进口柑橘类 新鲜水果",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/fKgwRhGa2uoEMyOP9ipbng==.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "",
                        "promotionType": "",
                        "promotionId": "",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010142203",
                        "productType": "1",
                        "price": "35.80",
                        "refPrice": "",
                        "catGroupId": "R9006669",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010560563709",
                        "sugGoodsName": "佳沛zespri 新西兰进口阳光金奇异果 22-25粒原箱（礼盒装）",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/NU1Mot4q_bsfUDrlqButTQ.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "拼购",
                        "promotionType": "501",
                        "promotionId": "21260d0fa1cc4fa2",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010147239",
                        "productType": "1",
                        "price": "149.00",
                        "refPrice": "259.00",
                        "catGroupId": "R9006671",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010640173291",
                        "sugGoodsName": "展卉 四川爱媛38号 果冻橙子 手剥柑橘 1.5kg装 新鲜水果",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/27IUT0-QNV68OE73GXxPqg.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "拼购",
                        "promotionType": "501",
                        "promotionId": "72dc06e825b64977",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010142203",
                        "productType": "1",
                        "price": "19.80",
                        "refPrice": "39.80",
                        "catGroupId": "R9006662",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010639318371",
                        "sugGoodsName": "欢乐果园(JOYTREE) 山东沾化冬枣 精选优质冬枣 500g盒装 冷藏国产浆果/核果类",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/ZriXN8oiuyrbMn4n5VmmXQ.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "拼购",
                        "promotionType": "501",
                        "promotionId": "3c219161340a4170",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010147239",
                        "productType": "1",
                        "price": "7.50",
                        "refPrice": "15.80",
                        "catGroupId": "R9006664",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010562311887",
                        "sugGoodsName": "欢乐果园(JOYTREE) 新疆西周密火焰蜜瓜 1个简装 1.2kg以上/个 冷藏国产瓜类 哈密瓜",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/3nBFVOsYap26UFGu4CtCGA.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "拼购",
                        "promotionType": "501",
                        "promotionId": "33a57878ed9f4c05",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010147239",
                        "productType": "1",
                        "price": "13.80",
                        "refPrice": "29.90",
                        "catGroupId": "R9006663",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010563754389",
                        "sugGoodsName": "展卉 陕西大荔冬枣简装 500g装 鲜枣脆甜冬枣 冷藏国产热带水果类新鲜水果",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/xUX4me_wWz-Fk0kV1BhuHw.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "",
                        "promotionType": "",
                        "promotionId": "",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010142203",
                        "productType": "1",
                        "price": "17.80",
                        "refPrice": "",
                        "catGroupId": "R9006667",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010508268270",
                        "sugGoodsName": "展卉 美洲进口牛油果 6个装 单果重量约130-180g 新鲜水果",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/vW6MFxwXzIgCS5oI_wceGw.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "拼购",
                        "promotionType": "501",
                        "promotionId": "9503346d4d514d05",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010142203",
                        "productType": "1",
                        "price": "28.80",
                        "refPrice": "59.80",
                        "catGroupId": "R9006674",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010578856570",
                        "sugGoodsName": "欢乐果园(JOYTREE) 南非进口红西柚子 2个简装 单果重约230-310g 冷藏柑橘类",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/1LCxmxtLXlU3AeOt0m158Q.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "拼购",
                        "promotionType": "501",
                        "promotionId": "b5826417dd5342a6",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010147239",
                        "productType": "1",
                        "price": "7.80",
                        "refPrice": "15.80",
                        "catGroupId": "R9006669",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010560944620",
                        "sugGoodsName": "佳沛zespri 新西兰进口阳光金奇异果 27-33粒原箱装",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/5d7IBl8ZGHHQoXgzFz5abQ.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "拼购",
                        "promotionType": "501",
                        "promotionId": "56a0383df815426d",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010147239",
                        "productType": "1",
                        "price": "149.00",
                        "refPrice": "259.00",
                        "catGroupId": "R9006671",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010663514839",
                        "sugGoodsName": "展卉 云南哀牢山冰糖橙 高糖特级果2.5kg装 甜橙子 新鲜水果",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/GHtEDTN6hs5AebdmEEWbyQ.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "大聚惠",
                        "promotionType": "1",
                        "promotionId": "11530653",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010142203",
                        "productType": "1",
                        "price": "39.80",
                        "refPrice": "45.80",
                        "catGroupId": "R9006662",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010598069796",
                        "sugGoodsName": "展卉 精品琯溪蜜柚 红心柚子2粒 单果1.8-2.5斤 新鲜水果",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/8QtXekKuNlsfPhTrP-oxjQ.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "拼购",
                        "promotionType": "501",
                        "promotionId": "977e4117409d4d66",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010142203",
                        "productType": "1",
                        "price": "12.80",
                        "refPrice": "25.80",
                        "catGroupId": "R9006667",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010219594747",
                        "sugGoodsName": "【苏宁生鲜】展卉 泰国进口龙眼 桂圆 1kg装 新鲜水果",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/yEYMKWsil3zOV88VOd31yQ.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "拼购",
                        "promotionType": "501",
                        "promotionId": "689eecd6968d4e0b",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010142203",
                        "productType": "1",
                        "price": "13.80",
                        "refPrice": "27.80",
                        "catGroupId": "R9006674",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010613665132",
                        "sugGoodsName": "大土澳 南非进口 南非橙 6颗装 单果约200g",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/wZoryNZPBEHhl-LXUbSu3g.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "",
                        "promotionType": "",
                        "promotionId": "",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010148704",
                        "productType": "1",
                        "price": "120.00",
                        "refPrice": "",
                        "catGroupId": "R9006669",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010560944625",
                        "sugGoodsName": "佳沛zespri 新西兰进口金奇异果 6个简装 单果重约90-100g 猕猴桃/奇异果",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/cnsAFgI3bOG0kYFj-m_tJw.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "拼购",
                        "promotionType": "501",
                        "promotionId": "f7732cfd3aaf4ae0",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010147239",
                        "productType": "1",
                        "price": "27.80",
                        "refPrice": "55.80",
                        "catGroupId": "R9006671",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010545748375",
                        "sugGoodsName": "展卉 国产红心火龙果 简装4个装 单果约300-500g 冷藏国产热带水果类新鲜水果",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/VHNDk1MJ440EUoIDh3ex-g.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "拼购",
                        "promotionType": "501",
                        "promotionId": "fcc0c601359545c5",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010142203",
                        "productType": "1",
                        "price": "18.80",
                        "refPrice": "37.80",
                        "catGroupId": "R9006667",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010535544628",
                        "sugGoodsName": "【2件起售】米又 福建六鳌红心小番薯 地瓜 2.5斤小果（偶数件发）",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/L_WZwErQNL8sTR0HWGSJkA==.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "",
                        "promotionType": "",
                        "promotionId": "",
                        "vendorId": "0070106098",
                        "shopCode": "0070106098",
                        "supplierCode": "0070106098",
                        "productType": "2",
                        "price": "8.20",
                        "refPrice": "9.50",
                        "catGroupId": "R9006174",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000000681130222",
                        "sugGoodsName": "【2件起售】平和琯溪蜜柚正宗红心柚子1个装 (700g-1200g)（偶件数发）",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/q1D3VSWoSlpA35DHCafSMQ.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "",
                        "promotionType": "",
                        "promotionId": "",
                        "vendorId": "0070106098",
                        "shopCode": "0070106098",
                        "supplierCode": "0070106098",
                        "productType": "2",
                        "price": "8.50",
                        "refPrice": "39.90",
                        "catGroupId": "R9006278",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000000658288192",
                        "sugGoodsName": "【中华特色】蒲江馆 四川蒲江黄心猕猴桃6粒（单果90-120g）新鲜水果奇异果甜心弥猴桃",
                        "pictureUrl": "//image.suning.cn/uimg/b2c/newcatentries/0070166953-000000000658288192_1.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "",
                        "promotionType": "",
                        "promotionId": "",
                        "vendorId": "0070166953",
                        "shopCode": "0070166953",
                        "supplierCode": "0070166953",
                        "productType": "2",
                        "price": "39.90",
                        "refPrice": "",
                        "catGroupId": "R9006664",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010627830843",
                        "sugGoodsName": "【2件起售，请拍2件】苑果苑四川眉山爱媛38号无核果冻橙柑橘类 净重 2.5斤 新鲜水果",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/9O03SCcUuvXaQXiot5s_Lg.png",
                        "sugGoodsDes": "",
                        "promotionInfo": "大聚惠",
                        "promotionType": "1",
                        "promotionId": "11500920",
                        "vendorId": "0070221084",
                        "shopCode": "0070221084",
                        "supplierCode": "0070221084",
                        "productType": "2",
                        "price": "19.90",
                        "refPrice": "35.90",
                        "catGroupId": "R9006662",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010606950177",
                        "sugGoodsName": "【中华特色馆】山东馆 云耕东犁板栗香薯 农家自种地瓜/红薯 番薯山芋2.5斤新鲜蔬菜 散装约3-8两/个【双数件发货】",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/QxtX2invKl_x866saSU3vw.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "拼购",
                        "promotionType": "501",
                        "promotionId": "2b8ede18dff14a43",
                        "vendorId": "0070167061",
                        "shopCode": "0070167061",
                        "supplierCode": "0070167061",
                        "productType": "2",
                        "price": "7.90",
                        "refPrice": "35.90",
                        "catGroupId": "R9006173",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010581294341",
                        "sugGoodsName": "展卉 云南红心猕猴桃 6个装（简装） 单果约70g以上 新鲜水果",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/YJOV3O1qPn4lmmKgQ2bC4Q==.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "",
                        "promotionType": "",
                        "promotionId": "",
                        "vendorId": "0000000000",
                        "shopCode": "0000000000",
                        "supplierCode": "0010142203",
                        "productType": "1",
                        "price": "24.80",
                        "refPrice": "",
                        "catGroupId": "R9006667",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010574603241",
                        "sugGoodsName": "悠乐果yolego 突尼斯软籽石榴4斤装 新鲜水果 冷藏国产浆果类/核果类 国产箱装",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/1xIb42BTT7qfwdP3zuq8ag==.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "拼购",
                        "promotionType": "501",
                        "promotionId": "567dffd5de7b455f",
                        "vendorId": "0070213161",
                        "shopCode": "0070213161",
                        "supplierCode": "0070213161",
                        "productType": "2",
                        "price": "34.90",
                        "refPrice": "88.00",
                        "catGroupId": "R9006664",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010660788336",
                        "sugGoodsName": "【2件起售,请拍2件】苑果苑 四川爱媛38号无核果冻橙柑橘类 单果80-110克 净重2.5斤 新鲜水果",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/E8AUCPYR7OGnllJ-XB-cAg.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "苏宁抢购",
                        "promotionType": "12",
                        "promotionId": "11411749",
                        "vendorId": "0070221084",
                        "shopCode": "0070221084",
                        "supplierCode": "0070221084",
                        "productType": "2",
                        "price": "19.90",
                        "refPrice": "35.90",
                        "catGroupId": "R9006662",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010589420921",
                        "sugGoodsName": "【客家土楼】红心蜜柚2个装 单果1.8-2.5斤红肉柚子应季孕妇新鲜水果",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/hTpT385mB5s2wjtzjjuRvg.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "",
                        "promotionType": "",
                        "promotionId": "",
                        "vendorId": "0070217927",
                        "shopCode": "0070217927",
                        "supplierCode": "0070217927",
                        "productType": "2",
                        "price": "15.80",
                        "refPrice": "16.80",
                        "catGroupId": "R9006667",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010074317195",
                        "sugGoodsName": "【11.1日活动价14.8限量抢】贵州馆 水城红心猕猴桃奇异果8枚中果单果70-90g地标奇异果新鲜水果现采生鲜",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/qbXrem5q70C72NPh3V47Hg.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "",
                        "promotionType": "",
                        "promotionId": "",
                        "vendorId": "0070169512",
                        "shopCode": "0070169512",
                        "supplierCode": "0070169512",
                        "productType": "2",
                        "price": "14.80",
                        "refPrice": "18.80",
                        "catGroupId": "R9006664",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    },
                    {
                        "sugGoodsId": "",
                        "sugGoodsCode": "000000010626702926",
                        "sugGoodsName": "【第二件9.9元】【中华特色馆】四川馆 四川爱媛38号果冻橙1250g箱装新鲜水果橙子橘子非赣南脐橙 西南",
                        "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/TXd9TlZx8879rR9zmCuSPg.jpg",
                        "sugGoodsDes": "",
                        "promotionInfo": "",
                        "promotionType": "",
                        "promotionId": "",
                        "vendorId": "0070211417",
                        "shopCode": "0070211417",
                        "supplierCode": "0070211417",
                        "productType": "2",
                        "price": "23.90",
                        "refPrice": "39.90",
                        "catGroupId": "R9006662",
                        "persent": "",
                        "handwork": "5_9-88_0_A"
                    }
                ]
            }
        ]
    }
})
// console.log(html);
server.get("/b",(req,res)=>{
    res.send(html);
})