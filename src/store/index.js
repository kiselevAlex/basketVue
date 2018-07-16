import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Message } from 'element-ui';
import {
    GET_BASKET,
    AUTH_API,
    DELETE_BASKET_ELEMENT,
    DEBUG,
    DELAY_BASKET_ELEMENT,
    UPDATE_COUNT_BASKET_ELEMENT,
    UNDELAY_BASKET_ELEMENT,
    ADD_TO_BASKET_BY_CODE
} from '@/consts/api'

Vue.use(Vuex)

let items = [{
    "ID": "305761",
    "LID": "s1",
    "FUSER_ID": "7035938",
    "ORDER_ID": null,
    "PRODUCT_ID": "4935",
    "PRODUCT_PRICE_ID": "121418",
    "NAME": "\u0424\u043b\u043e\u043c\u0430\u0441\u0442\u0435\u0440\u044b 12 \u0446\u0432\u0435\u0442\u043d\u043e\u0439(\u0430\u044f).\/\u0441 \u0432\u0435\u043d\u0442\u0438\u043b\u0438\u0440\u0443\u0435\u043c\u044b\u0439.\u043a\u043e\u043b\u043f\u0430\u0447\u043e\u043a.",
    "PRICE": "103.0000",
    "CURRENCY": "RUB",
    "BASE_PRICE": "103.0000",
    "VAT_INCLUDED": "Y",
    "DATE_INSERT": {},
    "DATE_UPDATE": {},
    "WEIGHT": "0.00",
    "QUANTITY": "1.00",
    "DELAY": "N",
    "CAN_BUY": "Y",
    "MODULE": "catalog",
    "PRODUCT_PROVIDER_CLASS": "CCatalogProductProvider",
    "NOTES": "\u041a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432",
    "DETAIL_PAGE_URL": "\/catalog\/shkolnye_tovary\/prinadlezhnosti_dlya_risovaniya_i_lepki\/flomastery\/flomastery_12_tsvetov\/flomastery_12tsv_pingviny_shestigrannye_vent_kolpachok_v_pvkh\/4935\/",
    "DISCOUNT_PRICE": "0.0000",
    "CATALOG_XML_ID": "clothes_s1",
    "PRODUCT_XML_ID": "4935",
    "DISCOUNT_NAME": null,
    "DISCOUNT_VALUE": null,
    "DISCOUNT_COUPON": null,
    "VAT_RATE": "0.1800",
    "SUBSCRIBE": "N",
    "RESERVED": "N",
    "RESERVE_QUANTITY": null,
    "BARCODE_MULTI": "N",
    "CUSTOM_PRICE": "N",
    "DIMENSIONS": "a:3:{s:5:\"WIDTH\";s:1:\"0\";s:6:\"HEIGHT\";s:1:\"0\";s:6:\"LENGTH\";s:1:\"0\";}",
    "TYPE": null,
    "SET_PARENT_ID": null,
    "MEASURE_CODE": "796",
    "MEASURE_NAME": "\u0448\u0442",
    "CALLBACK_FUNC": null,
    "ORDER_CALLBACK_FUNC": null,
    "CANCEL_CALLBACK_FUNC": null,
    "PAY_CALLBACK_FUNC": null,
    "RECOMMENDATION": null,
    "SORT": "100",
    "DETAIL_PICTURE": {
        "ID": "213427",
        "TIMESTAMP_X": "15.07.2017 13:01:26",
        "MODULE_ID": "iblock",
        "HEIGHT": "450",
        "WIDTH": "450",
        "FILE_SIZE": "80338",
        "CONTENT_TYPE": "image\/jpeg",
        "SUBDIR": "iblock\/cbc",
        "FILE_NAME": "cbc208641fc4a6cf01b1794ce32defa1.jpg",
        "ORIGINAL_NAME": "flomastery-12-tsvetnoy-aya-s-ventiliruemyy-kolpachok.jpg",
        "DESCRIPTION": "",
        "HANDLER_ID": null,
        "EXTERNAL_ID": "8fec19730c0b1aec5abc6d02c9812907",
        "~src": false,
        "SRC": "\/upload\/iblock\/cbc\/cbc208641fc4a6cf01b1794ce32defa1.jpg"
    },
    "PROPERTY": {
        "TITLE": {
            "NAME": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043e\u043a\u043d\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430",
            "VALUE": "\u0424\u043b\u043e\u043c\u0430\u0441\u0442\u0435\u0440\u044b 12\u0446\u0432., &quot;\u041f\u0438\u043d\u0433\u0432\u0438\u043d\u044b&quot;, \u0448\u0435\u0441\u0442\u0438\u0433\u0440\u0430\u043d\u043d\u044b\u0435, \u0432\u0435\u043d\u0442.\u043a\u043e\u043b\u043f\u0430\u0447\u043e\u043a, \u0432 \u041f\u0412\u0425-\u0431\u043b\u0438\u0441\u0442\u0435\u0440\u0435 \u0441 \u0435\u0432\u0440\u043e\u043f\u043e\u0434\u0432\u0435\u0441\u043e\u043c,"
        },
        "KEYWORDS": {
            "NAME": "\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430",
            "VALUE": "\u0424\u043b\u043e\u043c\u0430\u0441\u0442\u0435\u0440\u044b 12\u0446\u0432., &quot;\u041f\u0438\u043d\u0433\u0432\u0438\u043d\u044b&quot;, \u0448\u0435\u0441\u0442\u0438\u0433\u0440\u0430\u043d\u043d\u044b\u0435, \u0432\u0435\u043d\u0442.\u043a\u043e\u043b\u043f\u0430\u0447\u043e\u043a, \u0432 \u041f\u0412\u0425-\u0431\u043b\u0438\u0441\u0442\u0435\u0440\u0435 \u0441 \u0435\u0432\u0440\u043e\u043f\u043e\u0434\u0432\u0435\u0441\u043e\u043c,"
        },
        "META_DESCRIPTION": {
            "NAME": "\u041c\u0435\u0442\u0430-\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",
            "VALUE": "\u0412\u043e\u043b\u043e\u043a\u043d\u0438\u0441\u0442\u043e\u0435 \u043e\u0441\u0442\u0440\u0438\u0435 \u0434\u0438\u0430\u043c\u0435\u0442\u0440\u043e\u043c 1,8 \u043c\u043c. \u0427\u0435\u0440\u043d\u0438\u043b\u0430 \u043d\u0430 \u0432\u043e\u0434\u043d\u043e\u0439 \u043e\u0441\u043d\u043e\u0432\u0435 \u043b\u0435\u0433\u043a\u043e \u043e\u0442\u0441\u0442\u0438\u0440\u044b\u0432\u0430\u044e\u0442\u0441\u044f. \u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u043e\u0442 \u0432\u044b\u0441\u044b\u0445\u0430\u043d\u0438\u044f 3 \u0433\u043e\u0434\u0430, \u043f\u0440\u0438 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0438 \u0432 \u0437\u0430\u043a\u0440\u044b\u0442\u043e\u043c \u0432\u0438\u0434\u0435."
        },
        "GET_REST_COUNT_DATE": {
            "NAME": "\u0414\u0430\u0442\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043b-\u0432\u0430 \u0447\u0435\u0440\u0435\u0437 get_rest_count",
            "VALUE": null
        },
        "USERCREATE": {"NAME": "userCreate", "VALUE": "10"},
        "DATECREATE": {"NAME": "dateCreate", "VALUE": "929178656"},
        "PRODUCERUSER": {"NAME": "producerUser", "VALUE": "131077"},
        "PRODUCERDATE": {"NAME": "producerDate", "VALUE": "1186738913"},
        "ARTNUMBER": {"NAME": "\u0410\u0440\u0442\u0438\u043a\u0443\u043b", "VALUE": "7790\/12"},
        "CODE": {"NAME": "\u041a\u043e\u0434", "VALUE": "214001"},
        "IMAGES": {
            "NAME": "\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",
            "VALUE": null
        },
        "COUNTRY": {
            "NAME": "\u0421\u0442\u0440\u0430\u043d\u0430",
            "VALUE": "\u0427\u0435\u0448\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430"
        },
        "NEWPRODUCT": {"NAME": "\u041d\u043e\u0432\u0438\u043d\u043a\u0430", "VALUE": null},
        "SALELEADER": {"NAME": "\u0425\u0438\u0442 \u043f\u0440\u043e\u0434\u0430\u0436", "VALUE": null},
        "RATE": {"NAME": "\u0420\u0435\u0439\u0442\u0438\u043d\u0433", "VALUE": null},
        "MINSTOCK": {
            "NAME": "\u0428\u0442\u0443\u043a \u0432 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0435",
            "VALUE": "10"
        },
        "MINCOUNT": {
            "NAME": "\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",
            "VALUE": "1"
        },
        "FAVORITETOVARS": {"NAME": "\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435", "VALUE": ""},
        "SPECIALOFFER": {
            "NAME": "\u0421\u043f\u0435\u0446\u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435",
            "VALUE": null
        },
        "RECOMMEND": {
            "NAME": "\u0421 \u044d\u0442\u0438\u043c \u0442\u043e\u0432\u0430\u0440\u043e\u043c \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c",
            "VALUE": null
        },
        "vote_count": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u0432\u0448\u0438\u0445",
            "VALUE": null
        },
        "vote_sum": {
            "NAME": "\u0421\u0443\u043c\u043c\u0430 \u043e\u0446\u0435\u043d\u043e\u043a",
            "VALUE": null
        },
        "rating": {"NAME": "\u0420\u0435\u0439\u0442\u0438\u043d\u0433", "VALUE": null},
        "ACODE600": {"NAME": "Moleskine", "VALUE": null},
        "ACODE700": {
            "NAME": "\u0410\u043a\u0432\u0430\u0440\u0435\u043b\u044c\u043d\u044b\u0435",
            "VALUE": null
        },
        "ACODE800": {"NAME": "\u0411\u0435\u043b\u0438\u0437\u043d\u0430 CIE", "VALUE": null},
        "ACODE900": {"NAME": "\u0411\u043b\u0435\u0441\u0442\u043a\u0438", "VALUE": null},
        "ACODE1000": {"NAME": "\u0411\u043b\u043e\u043a", "VALUE": null},
        "ACODE1100": {"NAME": "\u0411\u0443\u043c\u0430\u0433\u0430", "VALUE": null},
        "ACODE1200": {"NAME": "\u0412\u0430\u043b\u044f\u043d\u0438\u0435", "VALUE": null},
        "ACODE1300": {"NAME": "\u0412\u0435\u0441", "VALUE": null},
        "ACODE1400": {"NAME": "\u0412\u0438\u0434", "VALUE": null},
        "ACODE1500": {
            "NAME": "\u0412\u0438\u0434 \u0430\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u0430",
            "VALUE": null
        },
        "ACODE1600": {
            "NAME": "\u0412\u0438\u0434 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430",
            "VALUE": null
        },
        "ACODE1700": {
            "NAME": "\u0412\u0438\u0434 \u0437\u0430\u0441\u0442\u0435\u0436\u043a\u0438",
            "VALUE": null
        },
        "ACODE1800": {"NAME": "\u0412\u0438\u0434 \u043f\u0440\u0443\u0436\u0438\u043d\u044b", "VALUE": null},
        "ACODE1900": {"NAME": "\u0412\u0438\u0434 \u0441\u0442\u0435\u0440\u0436\u043d\u044f", "VALUE": null},
        "ACODE2000": {"NAME": "\u0412\u043e\u0437\u0440\u0430\u0441\u0442", "VALUE": null},
        "ACODE2100": {"NAME": "\u0412\u043e\u0440\u0441", "VALUE": null},
        "ACODE2200": {"NAME": "\u0412\u0440\u0430\u0449\u0435\u043d\u0438\u0435", "VALUE": null},
        "ACODE2300": {
            "NAME": "\u0412\u044b\u0440\u0430\u0449\u0438\u0432\u0430\u043d\u0438\u0435 \u043a\u0440\u0438\u0441\u0442\u0430\u043b\u043b\u043e\u0432",
            "VALUE": null
        },
        "ACODE2400": {"NAME": "\u0412\u044b\u0441\u043e\u0442\u0430", "VALUE": null},
        "ACODE2500": {
            "NAME": "\u0412\u044b\u0441\u043e\u0442\u0430 \u0441\u0442\u043e\u043f\u044b",
            "VALUE": null
        },
        "ACODE2600": {"NAME": "\u0412\u044b\u0448\u0438\u0432\u0430\u043d\u0438\u0435", "VALUE": null},
        "ACODE2700": {"NAME": "\u0412\u044f\u0437\u0430\u043d\u0438\u0435", "VALUE": null},
        "ACODE2800": {"NAME": "\u0413\u0440\u0430\u0432\u044e\u0440\u044b", "VALUE": null},
        "ACODE2900": {"NAME": "\u0414\u0438\u0430\u043c\u0435\u0442\u0440", "VALUE": null},
        "ACODE3000": {
            "NAME": "\u0414\u0438\u0430\u043c\u0435\u0442\u0440 \u0440\u0435\u0437\u0438\u043d\u043a\u0438",
            "VALUE": null
        },
        "ACODE3100": {"NAME": "\u0414\u043b\u0438\u043d\u0430", "VALUE": null},
        "ACODE3200": {
            "NAME": "\u0414\u043b\u0438\u043d\u0430 \u0440\u0435\u0437\u0430\u043a\u0430",
            "VALUE": null
        },
        "ACODE3300": {"NAME": "\u0414\u043b\u0438\u043d\u0430 \u0448\u043a\u0430\u043b\u044b", "VALUE": null},
        "ACODE3400": {
            "NAME": "\u0414\u043b\u044f \u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043b\u0435\u0439",
            "VALUE": null
        },
        "ACODE3500": {"NAME": "\u0414\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u044b", "VALUE": null},
        "ACODE3600": {"NAME": "\u0415\u043c\u043a\u043e\u0441\u0442\u044c", "VALUE": null},
        "ACODE3700": {"NAME": "\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438", "VALUE": null},
        "ACODE3800": {"NAME": "\u0417\u0430\u0441\u0442\u0435\u0436\u043a\u0430", "VALUE": null},
        "ACODE3900": {
            "NAME": "\u0418\u0433\u0440\u0443\u0448\u043a\u0438 \u0438\u0437 \u043f\u043e\u043c\u043f\u043e\u043d\u043e\u0432",
            "VALUE": null
        },
        "ACODE4000": {"NAME": "\u0418\u0437 \u0433\u0438\u043f\u0441\u0430", "VALUE": null},
        "ACODE4100": {"NAME": "\u0418\u0437 \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0438", "VALUE": null},
        "ACODE4200": {"NAME": "\u0418\u0437 \u043f\u0435\u0441\u043a\u0430", "VALUE": null},
        "ACODE4300": {
            "NAME": "\u0418\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0435\u0439",
            "VALUE": null
        },
        "ACODE4500": {"NAME": "\u041a\u043b\u0430\u0441\u0441", "VALUE": null},
        "ACODE4700": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432 \u043d\u0430\u0431\u043e\u0440\u0435",
            "VALUE": null
        },
        "ACODE4800": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0435",
            "VALUE": null
        },
        "ACODE4900": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0438\u0437\u0438\u0442\u043e\u043a",
            "VALUE": null
        },
        "ACODE5000": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043d\u043e\u043f\u043e\u043a",
            "VALUE": null
        },
        "ACODE5100": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043e\u043b\u0435\u0446",
            "VALUE": null
        },
        "ACODE5200": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0440\u0443\u0433\u043e\u0432",
            "VALUE": null
        },
        "ACODE5300": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u0438\u0441\u0442\u043e\u0432",
            "VALUE": null
        },
        "ACODE5400": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u0438\u0441\u0442\u043e\u0432 \u0432 \u0431\u043b\u043e\u043a\u043d\u043e\u0442\u0435",
            "VALUE": null
        },
        "ACODE5500": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u0438\u0441\u0442\u043e\u0432 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u043f\u043b\u0435\u0442\u0430",
            "VALUE": null
        },
        "ACODE5600": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0439",
            "VALUE": null
        },
        "ACODE5700": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0430\u043d\u0435\u043b\u0435\u0439",
            "VALUE": null
        },
        "ACODE5800": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0444\u043e\u0440\u0430\u0446\u0438\u0438",
            "VALUE": null
        },
        "ACODE5900": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",
            "VALUE": null
        },
        "ACODE6000": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043e\u0432",
            "VALUE": null
        },
        "ACODE6100": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u043e\u0437\u0435\u0442\u043e\u043a",
            "VALUE": null
        },
        "ACODE6200": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0435\u043a\u0446\u0438\u0439",
            "VALUE": null
        },
        "ACODE6300": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u043e\u0435\u0432",
            "VALUE": null
        },
        "ACODE6400": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u043e\u0440\u043e\u043d \u0434\u043b\u044f \u043f\u0435\u0447\u0430\u0442\u0438",
            "VALUE": null
        },
        "ACODE6500": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a",
            "VALUE": null
        },
        "ACODE6600": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0444\u0430\u0439\u043b\u043e\u0432",
            "VALUE": null
        },
        "ACODE6700": {"NAME": "\u0410\u0440\u043e\u043c\u0430\u0442", "VALUE": null},
        "ACODE6800": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0444\u043e\u0442\u043e",
            "VALUE": null
        },
        "ACODE6900": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0446\u0432\u0435\u0442\u043e\u0432",
            "VALUE": "12\u0446\u0432."
        },
        "ACODE7000": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0446\u0432\u0435\u0442\u043e\u0432 \u0432 \u043d\u0430\u0431\u043e\u0440\u0435",
            "VALUE": null
        },
        "ACODE7100": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0448\u0442\u0443\u043a \u0432 \u043d\u0430\u0431\u043e\u0440\u0435",
            "VALUE": null
        },
        "ACODE7200": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0448\u0442\u0443\u043a \u0432 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0435",
            "VALUE": null
        },
        "ACODE7300": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",
            "VALUE": null
        },
        "ACODE7400": {"NAME": "\u041a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u0435", "VALUE": null},
        "ACODE7500": {"NAME": "\u041a\u0443\u043a\u0443\u0440\u0443\u0437\u0430", "VALUE": null},
        "ACODE7600": {"NAME": "\u041b\u0430\u043c\u043f\u0430", "VALUE": null},
        "ACODE7700": {"NAME": "\u041b\u0438\u043d\u043e\u0432\u043a\u0430", "VALUE": null},
        "ACODE7800": {"NAME": "\u041b\u0438\u0446\u0435\u043d\u0437\u0438\u044f", "VALUE": null},
        "ACODE7900": {
            "NAME": "\u041c\u0430\u0441\u043b\u044f\u043d\u0430\u044f \u043e\u0441\u043d\u043e\u0432\u0430 \u0447\u0435\u0440\u043d\u0438\u043b",
            "VALUE": null
        },
        "ACODE8000": {"NAME": "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b", "VALUE": null},
        "ACODE8100": {
            "NAME": "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043a\u043e\u0440\u043f\u0443\u0441\u0430",
            "VALUE": null
        },
        "ACODE8200": {
            "NAME": "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043e\u0431\u043b\u043e\u0436\u043a\u0438",
            "VALUE": null
        },
        "ACODE8300": {
            "NAME": "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0440\u0443\u0447\u0435\u043a",
            "VALUE": null
        },
        "ACODE8400": {"NAME": "\u041c\u0435\u0442\u0440\u0430\u0436", "VALUE": null},
        "ACODE8500": {"NAME": "\u041c\u043e\u0434\u0435\u043b\u044c", "VALUE": null},
        "ACODE8600": {"NAME": "\u041c\u043e\u0449\u043d\u043e\u0441\u0442\u044c", "VALUE": null},
        "ACODE8700": {"NAME": "\u041d\u0430\u0431\u043e\u0440", "VALUE": null},
        "ACODE8800": {"NAME": "\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435", "VALUE": null},
        "ACODE8900": {"NAME": "\u041d\u0430\u043a\u043e\u043d\u0435\u0447\u043d\u0438\u043a", "VALUE": null},
        "ACODE9000": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u043d\u043e\u0439 \u0432\u044b\u0440\u0443\u0431\u043a\u0438",
            "VALUE": null
        },
        "ACODE9100": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0432\u0442\u0443\u043b\u043a\u0438",
            "VALUE": null
        },
        "ACODE9200": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043a\u0430\u0440\u043c\u0430\u043d\u0430",
            "VALUE": null
        },
        "ACODE9300": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043b\u0430\u0441\u0442\u0438\u043a\u0430",
            "VALUE": null
        },
        "ACODE9400": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043c\u0435\u0442\u0430\u043b\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0445",
            "VALUE": null
        },
        "ACODE9500": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043d\u0430\u0434\u043f\u0438\u0441\u0438",
            "VALUE": null
        },
        "ACODE9600": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043e\u0433\u0440 \u043b\u0438\u043d\u0435\u0439\u043a\u0438",
            "VALUE": null
        },
        "ACODE9700": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0438\/\u043f\u043b\u0430\u0441\u0442\u0431\u043e\u043a\u0441\u0430",
            "VALUE": null
        },
        "ACODE9800": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0443\u0448\u0435\u043a",
            "VALUE": null
        },
        "ACODE9900": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0444\u043e\u0440\u0437\u0430\u0446\u0430",
            "VALUE": null
        },
        "ACODE10000": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0444\u0443\u0442\u043b\u044f\u0440\u0430",
            "VALUE": null
        },
        "ACODE10100": {"NAME": "\u041d\u0430\u043c\u043e\u0442\u043a\u0430", "VALUE": null},
        "ACODE10200": {"NAME": "\u041d\u043e\u043c\u0435\u0440", "VALUE": null},
        "ACODE10300": {"NAME": "\u041e\u0431\u043b\u043e\u0436\u043a\u0430", "VALUE": null},
        "ACODE10400": {"NAME": "\u041e\u0431\u044a\u0435\u043c", "VALUE": null},
        "ACODE10500": {
            "NAME": "\u041e\u0431\u044a\u0435\u043c \u043a\u043e\u0440\u0437\u0438\u043d\u044b",
            "VALUE": null
        },
        "ACODE10600": {
            "NAME": "\u041e\u0431\u044a\u0435\u043c \u043f\u0430\u043c\u044f\u0442\u0438",
            "VALUE": null
        },
        "ACODE10700": {"NAME": "\u041e\u043a\u043d\u043e", "VALUE": null},
        "ACODE10800": {"NAME": "\u041e\u0441\u043d\u043e\u0432\u0430", "VALUE": null},
        "ACODE10900": {"NAME": "\u041f\u0435\u0440\u0444\u043e\u0440\u0430\u0446\u0438\u044f", "VALUE": null},
        "ACODE11000": {"NAME": "\u041f\u0438\u0442\u0430\u043d\u0438\u0435", "VALUE": null},
        "ACODE11100": {"NAME": "\u041f\u043b\u0435\u0442\u0435\u043d\u0438\u0435", "VALUE": null},
        "ACODE11200": {"NAME": "\u041f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u044c", "VALUE": null},
        "ACODE11300": {
            "NAME": "\u041f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE11400": {
            "NAME": "\u041f\u043e\u0434\u0435\u043b\u043a\u0438 \u0441\u0432\u043e\u0438\u043c\u0438 \u0440\u0443\u043a\u0430\u043c\u0438",
            "VALUE": null
        },
        "ACODE11500": {"NAME": "\u041f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0430", "VALUE": null},
        "ACODE11600": {
            "NAME": "\u041f\u043e\u0434\u0441\u043a\u0430\u0437 (\u043a\u0443\u0434\u0430-\u043a\u043e\u043c\u0443)",
            "VALUE": null
        },
        "ACODE11700": {"NAME": "\u041f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0430", "VALUE": null},
        "ACODE11800": {"NAME": "\u041f\u043e\u043a\u0440\u044b\u0442\u0438\u0435", "VALUE": null},
        "ACODE11900": {
            "NAME": "\u041f\u043e\u043b\u043e\u0432\u0430\u044f \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE12000": {"NAME": "\u041f\u0440\u0435\u0434\u043c\u0435\u0442", "VALUE": null},
        "ACODE12100": {
            "NAME": "\u041f\u0440\u0438\u0432\u043e\u0434 \u043f\u0435\u0440\u0444\u043e\u0440\u0430\u0446\u0438\u0438",
            "VALUE": null
        },
        "ACODE12200": {
            "NAME": "\u041f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE12400": {
            "NAME": "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE12500": {"NAME": "\u041f\u0440\u043e\u043a\u043b\u0435\u0439\u043a\u0430", "VALUE": null},
        "ACODE12600": {
            "NAME": "\u0420\u0430\u0431\u043e\u0447\u0438\u0439 \u0446\u0438\u043a\u043b",
            "VALUE": null
        },
        "ACODE12700": {"NAME": "\u0420\u0430\u0437\u043c\u0435\u0440", "VALUE": null},
        "ACODE12800": {
            "NAME": "\u0420\u0430\u0437\u043c\u0435\u0440 (\u0444\u043e\u0440\u043c\u0430\u0442)",
            "VALUE": null
        },
        "ACODE12900": {
            "NAME": "\u0420\u0430\u0437\u043c\u0435\u0440 \u0430\u043b\u044c\u0431\u043e\u043c\u0430",
            "VALUE": null
        },
        "ACODE13000": {
            "NAME": "\u0420\u0430\u0437\u043c\u0435\u0440 \u043f\u0440\u0443\u0436\u0438\u043d\u044b",
            "VALUE": null
        },
        "ACODE13100": {"NAME": "\u0420\u0430\u0437\u043c\u0435\u0440 \u0444\u043e\u0442\u043e", "VALUE": null},
        "ACODE13200": {
            "NAME": "\u0420\u0430\u0437\u0440\u044f\u0434\u043d\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE13300": {"NAME": "\u0420\u0430\u0437\u044a\u0435\u043c", "VALUE": null},
        "ACODE13400": {"NAME": "\u0420\u0438\u0441\u0443\u043d\u043e\u043a", "VALUE": null},
        "ACODE13500": {"NAME": "\u0420\u043e\u0441\u043f\u0438\u0441\u044c", "VALUE": null},
        "ACODE13600": {
            "NAME": "\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0440\u0435\u0437\u043a\u0438",
            "VALUE": null
        },
        "ACODE13700": {
            "NAME": "\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0447\u0442\u0435\u043d\u0438\u044f",
            "VALUE": null
        },
        "ACODE13800": {"NAME": "\u0421\u043c\u0435\u043d\u043d\u0430\u044f", "VALUE": null},
        "ACODE13900": {
            "NAME": "\u0421\u043c\u0435\u043d\u043d\u044b\u0435 \u043b\u0435\u0437\u0432\u0438\u044f",
            "VALUE": null
        },
        "ACODE14000": {
            "NAME": "\u0421\u043c\u0435\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
            "VALUE": null
        },
        "ACODE14100": {
            "NAME": "\u0421\u043f\u043e\u0441\u043e\u0431 \u0437\u0430\u043a\u043b\u0435\u0439\u043a\u0438",
            "VALUE": null
        },
        "ACODE14200": {
            "NAME": "\u0422\u0432\u0435\u0440\u0434\u043e\u0441\u0442\u044c\/\u043c\u044f\u0433\u043a\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE14300": {
            "NAME": "\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f \u0441\u0435\u043d\u0441\u043e\u0440\u0430",
            "VALUE": null
        },
        "ACODE14400": {
            "NAME": "\u0422\u0438\u043f",
            "VALUE": "\u0432\u0435\u043d\u0442.\u043a\u043e\u043b\u043f\u0430\u0447\u043e\u043a"
        },
        "ACODE14500": {"NAME": "\u0422\u0438\u043f \u0431\u0443\u043c\u0430\u0433\u0438", "VALUE": null},
        "ACODE14600": {"NAME": "\u0422\u0438\u043f \u043a\u043d\u0438\u0436\u043a\u0438", "VALUE": null},
        "ACODE14700": {
            "NAME": "\u0422\u0438\u043f \u043a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u044f",
            "VALUE": null
        },
        "ACODE14800": {"NAME": "\u0422\u0438\u043f \u043b\u0430\u043c\u043f\u044b", "VALUE": null},
        "ACODE14900": {"NAME": "\u0422\u0438\u043f \u043e\u0431\u043b\u043e\u0436\u043a\u0438", "VALUE": null},
        "ACODE15000": {"NAME": "\u0422\u0438\u043f \u043f\u0430\u043f\u043a\u0438", "VALUE": null},
        "ACODE15100": {
            "NAME": "\u0422\u0438\u043f \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438",
            "VALUE": null
        },
        "ACODE15200": {"NAME": "\u0422\u0438\u043f \u0440\u0443\u0447\u043a\u0438", "VALUE": null},
        "ACODE15300": {
            "NAME": "\u0422\u0438\u043f \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430",
            "VALUE": null
        },
        "ACODE15400": {"NAME": "\u0422\u0438\u043f \u0446\u043e\u043a\u043e\u043b\u044f", "VALUE": null},
        "ACODE15500": {"NAME": "\u0422\u0438\u043f \u0447\u0435\u0440\u043d\u0438\u043b", "VALUE": null},
        "ACODE15600": {
            "NAME": "\u0422\u0438\u043f \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043b\u0438\u0442\u0430",
            "VALUE": null
        },
        "ACODE15700": {"NAME": "\u0422\u0438\u043f\u043e\u0440\u0430\u0437\u043c\u0435\u0440", "VALUE": null},
        "ACODE15800": {"NAME": "\u0422\u043e\u043b\u0449\u0438\u043d\u0430", "VALUE": null},
        "ACODE15900": {
            "NAME": "\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u0433\u0440\u0438\u0444\u0435\u043b\u044f",
            "VALUE": null
        },
        "ACODE16000": {
            "NAME": "\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u043a\u043e\u0440\u0435\u0448\u043a\u0430",
            "VALUE": null
        },
        "ACODE16100": {
            "NAME": "\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u043f\u0438\u0441\u044c\u043c\u0430",
            "VALUE": null
        },
        "ACODE16200": {
            "NAME": "\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u0430",
            "VALUE": null
        },
        "ACODE16300": {
            "NAME": "\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u043f\u043b\u0435\u043d\u043a\u0438",
            "VALUE": null
        },
        "ACODE16400": {"NAME": "\u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435", "VALUE": null},
        "ACODE16500": {"NAME": "\u0423\u0433\u043e\u043b", "VALUE": null},
        "ACODE16600": {
            "NAME": "\u0423\u043f\u0430\u043a\u043e\u0432\u043a\u0430",
            "VALUE": "\u0432 \u041f\u0412\u0425-\u0431\u043b\u0438\u0441\u0442\u0435\u0440\u0435 \u0441 \u0435\u0432\u0440\u043e\u043f\u043e\u0434\u0432\u0435\u0441\u043e\u043c"
        },
        "ACODE16700": {
            "NAME": "\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0441\u0435\u043a\u0440\u0435\u0442\u043d\u043e\u0441\u0442\u0438",
            "VALUE": null
        },
        "ACODE16800": {"NAME": "\u0424\u0430\u043a\u0442\u0443\u0440\u0430", "VALUE": null},
        "ACODE16900": {"NAME": "\u0424\u043b\u0438\u0441", "VALUE": null},
        "ACODE17000": {"NAME": "\u0424\u043e\u0440\u043c\u0430", "VALUE": null},
        "ACODE17100": {
            "NAME": "\u0424\u043e\u0440\u043c\u0430 \u043a\u043e\u0440\u043f\u0443\u0441\u0430",
            "VALUE": "\u0448\u0435\u0441\u0442\u0438\u0433\u0440\u0430\u043d\u043d\u044b\u0435"
        },
        "ACODE17200": {"NAME": "\u0424\u043e\u0440\u043c\u0430\u0442", "VALUE": null},
        "ACODE17300": {"NAME": "\u0426\u0432\u0435\u0442", "VALUE": null},
        "ACODE17400": {"NAME": "\u0426\u0432\u0435\u0442 \u0431\u043b\u043e\u043a\u0430", "VALUE": null},
        "ACODE17500": {
            "NAME": "\u0426\u0432\u0435\u0442 \u0440\u0435\u0437\u0438\u043d\u043a\u0438",
            "VALUE": null
        },
        "ACODE17600": {"NAME": "\u0426\u0432\u0435\u0442 \u0441\u0440\u0435\u0437\u0430", "VALUE": null},
        "ACODE17700": {"NAME": "\u0426\u0432\u0435\u0442 \u0447\u0435\u0440\u043d\u0438\u043b", "VALUE": null},
        "ACODE17800": {"NAME": "\u0426\u043e\u043a\u043e\u043b\u044c", "VALUE": null},
        "ACODE17900": {"NAME": "\u0428\u0438\u0440\u0438\u043d\u0430", "VALUE": null},
        "ACODE18000": {
            "NAME": "\u0428\u0438\u0440\u0438\u043d\u0430 \u043a\u043e\u0440\u0435\u0448\u043a\u0430",
            "VALUE": null
        },
        "ACODE18100": {
            "NAME": "\u0428\u0438\u0440\u0438\u043d\u0430 \u043b\u0435\u0437\u0432\u0438\u044f",
            "VALUE": null
        },
        "ACODE18200": {
            "NAME": "\u0428\u0438\u0440\u0438\u043d\u0430 \u043b\u0435\u043d\u0442\u044b",
            "VALUE": null
        },
        "ACODE18300": {
            "NAME": "\u0428\u0438\u0440\u0438\u043d\u0430 \u0440\u0443\u043b\u043e\u043d\u0430",
            "VALUE": null
        },
        "ACODE18400": {"NAME": "\u042d\u0444\u0444\u0435\u043a\u0442\u044b", "VALUE": null},
        "ACODE18500": {"NAME": "\u042f\u0437\u044b\u043a", "VALUE": null},
        "ACODE18600": {"NAME": "\u042f\u0440\u043a\u043e\u0441\u0442\u044c ISO", "VALUE": null},
        "ACODE18700": {
            "NAME": "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c",
            "VALUE": "CENTROPEN"
        },
        "ACODE18800": {
            "NAME": "\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0424\u0430\u0440\u043c",
            "VALUE": null
        },
        "ACODE18900": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0448\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u043b\u0438\u0441\u0442\u043e\u0432",
            "VALUE": null
        },
        "ACODE19000": {
            "NAME": "\u0422\u0438\u043f\u043e\u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u043a\u043e\u0431",
            "VALUE": null
        },
        "ACODE19100": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0444\u043e\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u043b\u0438\u0441\u0442\u043e\u0432",
            "VALUE": null
        },
        "ACODE19200": {
            "NAME": "\u041a\u0440\u0430\u0442\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043a\u0430\u0437\u0430",
            "VALUE": null
        },
        "ACODE19300": {"NAME": "\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440", "VALUE": null},
        "ACODE19400": {
            "NAME": "\u041e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043a\u0438\u0441\u0442\u043e\u0447\u043a\u0438",
            "VALUE": null
        },
        "ACODE19500": {
            "NAME": "\u0426\u0432\u0435\u0442\u043e\u0432\u043e\u0439 \u043f\u0438\u0433\u043c\u0435\u043d\u0442",
            "VALUE": null
        },
        "ACODE19600": {"NAME": "\u041c\u0430\u0433\u043d\u0438\u0442", "VALUE": null},
        "ACODE19700": {
            "NAME": "\u0420\u0435\u043b\u044c\u0435\u0444\u043d\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE19800": {
            "NAME": "\u0421\u0435\u0440\u0438\u044f",
            "VALUE": "\"\u041f\u0438\u043d\u0433\u0432\u0438\u043d\u044b\""
        },
        "ACODE19900": {
            "NAME": "\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE20000": {
            "NAME": "\u0426\u0432\u0435\u0442 \u043e\u0431\u043b\u043e\u0436\u043a\u0438",
            "VALUE": null
        },
        "ACODE20100": {"NAME": "\u041f\u0440\u0435\u0434\u043c\u0435\u0442", "VALUE": null},
        "ACODE20300": {"NAME": "\u0421\u0442\u043e\u043a", "VALUE": null},
        "ACODE20400": {"NAME": "\u0410\u043a\u0446\u0438\u044f \u041a\u043e\u0440\u043f", "VALUE": null},
        "ACODE20500": {
            "NAME": "\u0426\u0432\u0435\u0442 \u043a\u043e\u0440\u043f\u0443\u0441\u0430",
            "VALUE": null
        },
        "ACODE20600": {
            "NAME": "\u0420\u0430\u0441\u043f\u0440\u043e\u0434\u0430\u0436\u0430 \u041a\u043e\u0440\u043f",
            "VALUE": null
        },
        "ACODE20700": {"NAME": "\u041c\u0430\u0441\u0448\u0442\u0430\u0431", "VALUE": null},
        "ACODE20800": {
            "NAME": "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c",
            "VALUE": null
        },
        "ACODE20900": {"NAME": "\u0422\u0438\u0441\u043d\u0435\u043d\u0438\u0435", "VALUE": null},
        "ACODE21000": {"NAME": "\u0421\u0435\u0447\u0435\u043d\u0438\u0435", "VALUE": null},
        "ACODE21100": {"NAME": "\u041e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f", "VALUE": null},
        "ACODE21200": {
            "NAME": "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u044f",
            "VALUE": null
        },
        "ACODE21300": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043c\u0435\u0442\u0430\u043b\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0443\u0433\u043e\u043b\u043a\u043e\u0432",
            "VALUE": null
        },
        "ACODE21400": {
            "NAME": "\u0420\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u0436\u0438\u043c\u0430",
            "VALUE": null
        },
        "ACODE21500": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0440\u0443\u0447\u0435\u043a",
            "VALUE": null
        },
        "ACODE21600": {"NAME": "\u0413\u043e\u0434", "VALUE": null},
        "ACODE21700": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u043b\u043e\u043a\u043e\u0432",
            "VALUE": null
        },
        "ACODE21800": {
            "NAME": "\u0414\u043b\u0438\u043d\u0430 \u043d\u0430\u043c\u043e\u0442\u043a\u0438",
            "VALUE": null
        },
        "ACODE21900": {
            "NAME": "\u0428\u0438\u0440\u0438\u043d\u0430 \u0431\u0430\u0433\u0435\u0442\u0430",
            "VALUE": null
        },
        "ACODE22000": {"NAME": "\u041d\u043e\u043c\u0438\u043d\u0430\u043b", "VALUE": null},
        "ACODE22100": {
            "NAME": "\u0422\u0438\u043f \u043e\u0441\u043d\u0430\u0441\u0442\u043a\u0438",
            "VALUE": null
        },
        "ACODE22200": {
            "NAME": "\u0414\u0438\u0430\u043c\u0435\u0442\u0440 \u0432\u0442\u0443\u043b\u043a\u0438",
            "VALUE": null
        },
        "ACODE22300": {
            "NAME": "\u0414\u0438\u0430\u043c\u0435\u0442\u0440 \u0440\u0443\u043b\u043e\u043d\u0430",
            "VALUE": null
        },
        "ACODE22400": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0430 \u043b\u0438\u0441\u0442\u0435",
            "VALUE": null
        },
        "ACODE22500": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044d\u0442\u0438\u043a\u0435\u0442\u043e\u043a \u0432 \u0440\u0443\u043b\u043e\u043d\u0435",
            "VALUE": null
        },
        "ACODE22600": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",
            "VALUE": null
        },
        "ACODE22700": {
            "NAME": "\u0420\u0430\u0437\u043c\u0435\u0440 \u0441\u0442\u0440\u043e\u043a\u0438",
            "VALUE": null
        },
        "ACODE22800": {
            "NAME": "\u0420\u0430\u0437\u043c\u0435\u0440 \u043e\u0442\u0442\u0438\u0441\u043a\u0430",
            "VALUE": null
        },
        "ACODE22900": {"NAME": "\u0422\u0435\u043a\u0441\u0442\u0443\u0440\u0430", "VALUE": null},
        "ACODE23000": {
            "NAME": "\u0412\u044b\u0441\u043e\u0442\u0430 \u0432 \u0441\u043e\u0431\u0440\u0430\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435",
            "VALUE": null
        }
    }
}, {
    "ID": "1776420",
    "LID": "s1",
    "FUSER_ID": "7035938",
    "ORDER_ID": null,
    "PRODUCT_ID": "45145",
    "PRODUCT_PRICE_ID": "317187",
    "NAME": "\u0414\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446.\u0441\u0438\u0441\u0442\u0435\u043c\u0430  A4\/\u043d\u0430\u0441\u0442\u0435\u043d\u043d\u0430\u044f\/\u0441 10 \u0434\u0435\u043c\u043e\u043f\u0430\u043d.\/\u0441\u0435\u0440\u0430\u044f",
    "PRICE": "1917.7000",
    "CURRENCY": "RUB",
    "BASE_PRICE": "1917.7000",
    "VAT_INCLUDED": "Y",
    "DATE_INSERT": {},
    "DATE_UPDATE": {},
    "WEIGHT": "0.00",
    "QUANTITY": "1.00",
    "DELAY": "N",
    "CAN_BUY": "Y",
    "MODULE": "catalog",
    "PRODUCT_PROVIDER_CLASS": "CCatalogProductProvider",
    "NOTES": "\u041a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432",
    "DETAIL_PAGE_URL": "\/catalog\/ofisnye_tovary\/demonstratsionnoe_oborudovanie\/doski_flipcharty_demonstratsionnye_sistemy\/demo_sistema_a4_nastolnaya_10_paneley_seryy_devente\/45145\/",
    "DISCOUNT_PRICE": "0.0000",
    "CATALOG_XML_ID": "clothes_s1",
    "PRODUCT_XML_ID": "45145",
    "DISCOUNT_NAME": null,
    "DISCOUNT_VALUE": null,
    "DISCOUNT_COUPON": null,
    "VAT_RATE": "0.1800",
    "SUBSCRIBE": "N",
    "RESERVED": "N",
    "RESERVE_QUANTITY": null,
    "BARCODE_MULTI": "N",
    "CUSTOM_PRICE": "N",
    "DIMENSIONS": "a:3:{s:5:\"WIDTH\";s:1:\"0\";s:6:\"HEIGHT\";s:1:\"0\";s:6:\"LENGTH\";s:1:\"0\";}",
    "TYPE": null,
    "SET_PARENT_ID": null,
    "MEASURE_CODE": "796",
    "MEASURE_NAME": "\u0448\u0442",
    "CALLBACK_FUNC": null,
    "ORDER_CALLBACK_FUNC": null,
    "CANCEL_CALLBACK_FUNC": null,
    "PAY_CALLBACK_FUNC": null,
    "RECOMMENDATION": null,
    "SORT": "100",
    "DETAIL_PICTURE": {
        "ID": "229801",
        "TIMESTAMP_X": "12.10.2017 11:19:45",
        "MODULE_ID": "iblock",
        "HEIGHT": "583",
        "WIDTH": "600",
        "FILE_SIZE": "38116",
        "CONTENT_TYPE": "image\/jpeg",
        "SUBDIR": "iblock\/e18",
        "FILE_NAME": "e18c0ee54b1665def43e7fb4caa34369.jpg",
        "ORIGINAL_NAME": "-a4-10-.jpg",
        "DESCRIPTION": "",
        "HANDLER_ID": null,
        "EXTERNAL_ID": "ffb737aa7055e3b34b060e8a79ac81cd",
        "~src": false,
        "SRC": "\/upload\/iblock\/e18\/e18c0ee54b1665def43e7fb4caa34369.jpg"
    },
    "PROPERTY": {
        "TITLE": {
            "NAME": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043e\u043a\u043d\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430",
            "VALUE": "\u0414\u0435\u043c\u043e-\u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u04104, \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f, 10 \u043f\u0430\u043d\u0435\u043b\u0435\u0439, \u0441\u0435\u0440\u044b\u0439,  deVENTE"
        },
        "KEYWORDS": {
            "NAME": "\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430",
            "VALUE": "\u0414\u0435\u043c\u043e-\u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u04104, \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f, 10 \u043f\u0430\u043d\u0435\u043b\u0435\u0439, \u0441\u0435\u0440\u044b\u0439,  deVENTE"
        },
        "META_DESCRIPTION": {
            "NAME": "\u041c\u0435\u0442\u0430-\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",
            "VALUE": null
        },
        "GET_REST_COUNT_DATE": {
            "NAME": "\u0414\u0430\u0442\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043b-\u0432\u0430 \u0447\u0435\u0440\u0435\u0437 get_rest_count",
            "VALUE": null
        },
        "USERCREATE": {"NAME": "userCreate", "VALUE": "131072"},
        "DATECREATE": {"NAME": "dateCreate", "VALUE": "1494551435"},
        "PRODUCERUSER": {"NAME": "producerUser", "VALUE": "196694"},
        "PRODUCERDATE": {"NAME": "producerDate", "VALUE": "1379094291"},
        "ARTNUMBER": {"NAME": "\u0410\u0440\u0442\u0438\u043a\u0443\u043b", "VALUE": "6010312"},
        "CODE": {"NAME": "\u041a\u043e\u0434", "VALUE": "363051"},
        "IMAGES": {
            "NAME": "\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",
            "VALUE": null
        },
        "COUNTRY": {"NAME": "\u0421\u0442\u0440\u0430\u043d\u0430", "VALUE": "\u041a\u0438\u0442\u0430\u0439"},
        "NEWPRODUCT": {"NAME": "\u041d\u043e\u0432\u0438\u043d\u043a\u0430", "VALUE": null},
        "SALELEADER": {"NAME": "\u0425\u0438\u0442 \u043f\u0440\u043e\u0434\u0430\u0436", "VALUE": null},
        "RATE": {"NAME": "\u0420\u0435\u0439\u0442\u0438\u043d\u0433", "VALUE": null},
        "MINSTOCK": {
            "NAME": "\u0428\u0442\u0443\u043a \u0432 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0435",
            "VALUE": "4"
        },
        "MINCOUNT": {
            "NAME": "\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",
            "VALUE": "1"
        },
        "FAVORITETOVARS": {"NAME": "\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435", "VALUE": ""},
        "SPECIALOFFER": {
            "NAME": "\u0421\u043f\u0435\u0446\u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435",
            "VALUE": null
        },
        "RECOMMEND": {
            "NAME": "\u0421 \u044d\u0442\u0438\u043c \u0442\u043e\u0432\u0430\u0440\u043e\u043c \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c",
            "VALUE": null
        },
        "vote_count": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u0432\u0448\u0438\u0445",
            "VALUE": null
        },
        "vote_sum": {
            "NAME": "\u0421\u0443\u043c\u043c\u0430 \u043e\u0446\u0435\u043d\u043e\u043a",
            "VALUE": null
        },
        "rating": {"NAME": "\u0420\u0435\u0439\u0442\u0438\u043d\u0433", "VALUE": null},
        "ACODE600": {"NAME": "Moleskine", "VALUE": null},
        "ACODE700": {
            "NAME": "\u0410\u043a\u0432\u0430\u0440\u0435\u043b\u044c\u043d\u044b\u0435",
            "VALUE": null
        },
        "ACODE800": {"NAME": "\u0411\u0435\u043b\u0438\u0437\u043d\u0430 CIE", "VALUE": null},
        "ACODE900": {"NAME": "\u0411\u043b\u0435\u0441\u0442\u043a\u0438", "VALUE": null},
        "ACODE1000": {"NAME": "\u0411\u043b\u043e\u043a", "VALUE": null},
        "ACODE1100": {"NAME": "\u0411\u0443\u043c\u0430\u0433\u0430", "VALUE": null},
        "ACODE1200": {"NAME": "\u0412\u0430\u043b\u044f\u043d\u0438\u0435", "VALUE": null},
        "ACODE1300": {"NAME": "\u0412\u0435\u0441", "VALUE": null},
        "ACODE1400": {"NAME": "\u0412\u0438\u0434", "VALUE": null},
        "ACODE1500": {
            "NAME": "\u0412\u0438\u0434 \u0430\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u0430",
            "VALUE": null
        },
        "ACODE1600": {
            "NAME": "\u0412\u0438\u0434 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430",
            "VALUE": null
        },
        "ACODE1700": {
            "NAME": "\u0412\u0438\u0434 \u0437\u0430\u0441\u0442\u0435\u0436\u043a\u0438",
            "VALUE": null
        },
        "ACODE1800": {"NAME": "\u0412\u0438\u0434 \u043f\u0440\u0443\u0436\u0438\u043d\u044b", "VALUE": null},
        "ACODE1900": {"NAME": "\u0412\u0438\u0434 \u0441\u0442\u0435\u0440\u0436\u043d\u044f", "VALUE": null},
        "ACODE2000": {"NAME": "\u0412\u043e\u0437\u0440\u0430\u0441\u0442", "VALUE": null},
        "ACODE2100": {"NAME": "\u0412\u043e\u0440\u0441", "VALUE": null},
        "ACODE2200": {"NAME": "\u0412\u0440\u0430\u0449\u0435\u043d\u0438\u0435", "VALUE": null},
        "ACODE2300": {
            "NAME": "\u0412\u044b\u0440\u0430\u0449\u0438\u0432\u0430\u043d\u0438\u0435 \u043a\u0440\u0438\u0441\u0442\u0430\u043b\u043b\u043e\u0432",
            "VALUE": null
        },
        "ACODE2400": {"NAME": "\u0412\u044b\u0441\u043e\u0442\u0430", "VALUE": null},
        "ACODE2500": {
            "NAME": "\u0412\u044b\u0441\u043e\u0442\u0430 \u0441\u0442\u043e\u043f\u044b",
            "VALUE": null
        },
        "ACODE2600": {"NAME": "\u0412\u044b\u0448\u0438\u0432\u0430\u043d\u0438\u0435", "VALUE": null},
        "ACODE2700": {"NAME": "\u0412\u044f\u0437\u0430\u043d\u0438\u0435", "VALUE": null},
        "ACODE2800": {"NAME": "\u0413\u0440\u0430\u0432\u044e\u0440\u044b", "VALUE": null},
        "ACODE2900": {"NAME": "\u0414\u0438\u0430\u043c\u0435\u0442\u0440", "VALUE": null},
        "ACODE3000": {
            "NAME": "\u0414\u0438\u0430\u043c\u0435\u0442\u0440 \u0440\u0435\u0437\u0438\u043d\u043a\u0438",
            "VALUE": null
        },
        "ACODE3100": {"NAME": "\u0414\u043b\u0438\u043d\u0430", "VALUE": null},
        "ACODE3200": {
            "NAME": "\u0414\u043b\u0438\u043d\u0430 \u0440\u0435\u0437\u0430\u043a\u0430",
            "VALUE": null
        },
        "ACODE3300": {"NAME": "\u0414\u043b\u0438\u043d\u0430 \u0448\u043a\u0430\u043b\u044b", "VALUE": null},
        "ACODE3400": {
            "NAME": "\u0414\u043b\u044f \u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043b\u0435\u0439",
            "VALUE": null
        },
        "ACODE3500": {"NAME": "\u0414\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u044b", "VALUE": null},
        "ACODE3600": {"NAME": "\u0415\u043c\u043a\u043e\u0441\u0442\u044c", "VALUE": null},
        "ACODE3700": {"NAME": "\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438", "VALUE": null},
        "ACODE3800": {"NAME": "\u0417\u0430\u0441\u0442\u0435\u0436\u043a\u0430", "VALUE": null},
        "ACODE3900": {
            "NAME": "\u0418\u0433\u0440\u0443\u0448\u043a\u0438 \u0438\u0437 \u043f\u043e\u043c\u043f\u043e\u043d\u043e\u0432",
            "VALUE": null
        },
        "ACODE4000": {"NAME": "\u0418\u0437 \u0433\u0438\u043f\u0441\u0430", "VALUE": null},
        "ACODE4100": {"NAME": "\u0418\u0437 \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0438", "VALUE": null},
        "ACODE4200": {"NAME": "\u0418\u0437 \u043f\u0435\u0441\u043a\u0430", "VALUE": null},
        "ACODE4300": {
            "NAME": "\u0418\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0435\u0439",
            "VALUE": null
        },
        "ACODE4500": {"NAME": "\u041a\u043b\u0430\u0441\u0441", "VALUE": null},
        "ACODE4700": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432 \u043d\u0430\u0431\u043e\u0440\u0435",
            "VALUE": null
        },
        "ACODE4800": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0435",
            "VALUE": null
        },
        "ACODE4900": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0438\u0437\u0438\u0442\u043e\u043a",
            "VALUE": null
        },
        "ACODE5000": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043d\u043e\u043f\u043e\u043a",
            "VALUE": null
        },
        "ACODE5100": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043e\u043b\u0435\u0446",
            "VALUE": null
        },
        "ACODE5200": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0440\u0443\u0433\u043e\u0432",
            "VALUE": null
        },
        "ACODE5300": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u0438\u0441\u0442\u043e\u0432",
            "VALUE": null
        },
        "ACODE5400": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u0438\u0441\u0442\u043e\u0432 \u0432 \u0431\u043b\u043e\u043a\u043d\u043e\u0442\u0435",
            "VALUE": null
        },
        "ACODE5500": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u0438\u0441\u0442\u043e\u0432 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u043f\u043b\u0435\u0442\u0430",
            "VALUE": null
        },
        "ACODE5600": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0439",
            "VALUE": null
        },
        "ACODE5700": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0430\u043d\u0435\u043b\u0435\u0439",
            "VALUE": "10 \u043f\u0430\u043d\u0435\u043b\u0435\u0439"
        },
        "ACODE5800": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0444\u043e\u0440\u0430\u0446\u0438\u0438",
            "VALUE": null
        },
        "ACODE5900": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",
            "VALUE": null
        },
        "ACODE6000": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043e\u0432",
            "VALUE": null
        },
        "ACODE6100": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u043e\u0437\u0435\u0442\u043e\u043a",
            "VALUE": null
        },
        "ACODE6200": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0435\u043a\u0446\u0438\u0439",
            "VALUE": null
        },
        "ACODE6300": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u043e\u0435\u0432",
            "VALUE": null
        },
        "ACODE6400": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u043e\u0440\u043e\u043d \u0434\u043b\u044f \u043f\u0435\u0447\u0430\u0442\u0438",
            "VALUE": null
        },
        "ACODE6500": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a",
            "VALUE": null
        },
        "ACODE6600": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0444\u0430\u0439\u043b\u043e\u0432",
            "VALUE": null
        },
        "ACODE6700": {"NAME": "\u0410\u0440\u043e\u043c\u0430\u0442", "VALUE": null},
        "ACODE6800": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0444\u043e\u0442\u043e",
            "VALUE": null
        },
        "ACODE6900": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0446\u0432\u0435\u0442\u043e\u0432",
            "VALUE": null
        },
        "ACODE7000": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0446\u0432\u0435\u0442\u043e\u0432 \u0432 \u043d\u0430\u0431\u043e\u0440\u0435",
            "VALUE": null
        },
        "ACODE7100": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0448\u0442\u0443\u043a \u0432 \u043d\u0430\u0431\u043e\u0440\u0435",
            "VALUE": null
        },
        "ACODE7200": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0448\u0442\u0443\u043a \u0432 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0435",
            "VALUE": null
        },
        "ACODE7300": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",
            "VALUE": null
        },
        "ACODE7400": {"NAME": "\u041a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u0435", "VALUE": null},
        "ACODE7500": {"NAME": "\u041a\u0443\u043a\u0443\u0440\u0443\u0437\u0430", "VALUE": null},
        "ACODE7600": {"NAME": "\u041b\u0430\u043c\u043f\u0430", "VALUE": null},
        "ACODE7700": {"NAME": "\u041b\u0438\u043d\u043e\u0432\u043a\u0430", "VALUE": null},
        "ACODE7800": {"NAME": "\u041b\u0438\u0446\u0435\u043d\u0437\u0438\u044f", "VALUE": null},
        "ACODE7900": {
            "NAME": "\u041c\u0430\u0441\u043b\u044f\u043d\u0430\u044f \u043e\u0441\u043d\u043e\u0432\u0430 \u0447\u0435\u0440\u043d\u0438\u043b",
            "VALUE": null
        },
        "ACODE8000": {"NAME": "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b", "VALUE": null},
        "ACODE8100": {
            "NAME": "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043a\u043e\u0440\u043f\u0443\u0441\u0430",
            "VALUE": null
        },
        "ACODE8200": {
            "NAME": "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043e\u0431\u043b\u043e\u0436\u043a\u0438",
            "VALUE": null
        },
        "ACODE8300": {
            "NAME": "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0440\u0443\u0447\u0435\u043a",
            "VALUE": null
        },
        "ACODE8400": {"NAME": "\u041c\u0435\u0442\u0440\u0430\u0436", "VALUE": null},
        "ACODE8500": {"NAME": "\u041c\u043e\u0434\u0435\u043b\u044c", "VALUE": null},
        "ACODE8600": {"NAME": "\u041c\u043e\u0449\u043d\u043e\u0441\u0442\u044c", "VALUE": null},
        "ACODE8700": {"NAME": "\u041d\u0430\u0431\u043e\u0440", "VALUE": null},
        "ACODE8800": {"NAME": "\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435", "VALUE": null},
        "ACODE8900": {"NAME": "\u041d\u0430\u043a\u043e\u043d\u0435\u0447\u043d\u0438\u043a", "VALUE": null},
        "ACODE9000": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u043d\u043e\u0439 \u0432\u044b\u0440\u0443\u0431\u043a\u0438",
            "VALUE": null
        },
        "ACODE9100": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0432\u0442\u0443\u043b\u043a\u0438",
            "VALUE": null
        },
        "ACODE9200": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043a\u0430\u0440\u043c\u0430\u043d\u0430",
            "VALUE": null
        },
        "ACODE9300": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043b\u0430\u0441\u0442\u0438\u043a\u0430",
            "VALUE": null
        },
        "ACODE9400": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043c\u0435\u0442\u0430\u043b\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0445",
            "VALUE": null
        },
        "ACODE9500": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043d\u0430\u0434\u043f\u0438\u0441\u0438",
            "VALUE": null
        },
        "ACODE9600": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043e\u0433\u0440 \u043b\u0438\u043d\u0435\u0439\u043a\u0438",
            "VALUE": null
        },
        "ACODE9700": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0438\/\u043f\u043b\u0430\u0441\u0442\u0431\u043e\u043a\u0441\u0430",
            "VALUE": null
        },
        "ACODE9800": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0443\u0448\u0435\u043a",
            "VALUE": null
        },
        "ACODE9900": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0444\u043e\u0440\u0437\u0430\u0446\u0430",
            "VALUE": null
        },
        "ACODE10000": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0444\u0443\u0442\u043b\u044f\u0440\u0430",
            "VALUE": null
        },
        "ACODE10100": {"NAME": "\u041d\u0430\u043c\u043e\u0442\u043a\u0430", "VALUE": null},
        "ACODE10200": {"NAME": "\u041d\u043e\u043c\u0435\u0440", "VALUE": null},
        "ACODE10300": {"NAME": "\u041e\u0431\u043b\u043e\u0436\u043a\u0430", "VALUE": null},
        "ACODE10400": {"NAME": "\u041e\u0431\u044a\u0435\u043c", "VALUE": null},
        "ACODE10500": {
            "NAME": "\u041e\u0431\u044a\u0435\u043c \u043a\u043e\u0440\u0437\u0438\u043d\u044b",
            "VALUE": null
        },
        "ACODE10600": {
            "NAME": "\u041e\u0431\u044a\u0435\u043c \u043f\u0430\u043c\u044f\u0442\u0438",
            "VALUE": null
        },
        "ACODE10700": {"NAME": "\u041e\u043a\u043d\u043e", "VALUE": null},
        "ACODE10800": {"NAME": "\u041e\u0441\u043d\u043e\u0432\u0430", "VALUE": null},
        "ACODE10900": {"NAME": "\u041f\u0435\u0440\u0444\u043e\u0440\u0430\u0446\u0438\u044f", "VALUE": null},
        "ACODE11000": {"NAME": "\u041f\u0438\u0442\u0430\u043d\u0438\u0435", "VALUE": null},
        "ACODE11100": {"NAME": "\u041f\u043b\u0435\u0442\u0435\u043d\u0438\u0435", "VALUE": null},
        "ACODE11200": {"NAME": "\u041f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u044c", "VALUE": null},
        "ACODE11300": {
            "NAME": "\u041f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE11400": {
            "NAME": "\u041f\u043e\u0434\u0435\u043b\u043a\u0438 \u0441\u0432\u043e\u0438\u043c\u0438 \u0440\u0443\u043a\u0430\u043c\u0438",
            "VALUE": null
        },
        "ACODE11500": {"NAME": "\u041f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0430", "VALUE": null},
        "ACODE11600": {
            "NAME": "\u041f\u043e\u0434\u0441\u043a\u0430\u0437 (\u043a\u0443\u0434\u0430-\u043a\u043e\u043c\u0443)",
            "VALUE": null
        },
        "ACODE11700": {"NAME": "\u041f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0430", "VALUE": null},
        "ACODE11800": {"NAME": "\u041f\u043e\u043a\u0440\u044b\u0442\u0438\u0435", "VALUE": null},
        "ACODE11900": {
            "NAME": "\u041f\u043e\u043b\u043e\u0432\u0430\u044f \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE12000": {"NAME": "\u041f\u0440\u0435\u0434\u043c\u0435\u0442", "VALUE": null},
        "ACODE12100": {
            "NAME": "\u041f\u0440\u0438\u0432\u043e\u0434 \u043f\u0435\u0440\u0444\u043e\u0440\u0430\u0446\u0438\u0438",
            "VALUE": null
        },
        "ACODE12200": {
            "NAME": "\u041f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE12400": {
            "NAME": "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE12500": {"NAME": "\u041f\u0440\u043e\u043a\u043b\u0435\u0439\u043a\u0430", "VALUE": null},
        "ACODE12600": {
            "NAME": "\u0420\u0430\u0431\u043e\u0447\u0438\u0439 \u0446\u0438\u043a\u043b",
            "VALUE": null
        },
        "ACODE12700": {"NAME": "\u0420\u0430\u0437\u043c\u0435\u0440", "VALUE": "\u04104"},
        "ACODE12800": {
            "NAME": "\u0420\u0430\u0437\u043c\u0435\u0440 (\u0444\u043e\u0440\u043c\u0430\u0442)",
            "VALUE": null
        },
        "ACODE12900": {
            "NAME": "\u0420\u0430\u0437\u043c\u0435\u0440 \u0430\u043b\u044c\u0431\u043e\u043c\u0430",
            "VALUE": null
        },
        "ACODE13000": {
            "NAME": "\u0420\u0430\u0437\u043c\u0435\u0440 \u043f\u0440\u0443\u0436\u0438\u043d\u044b",
            "VALUE": null
        },
        "ACODE13100": {"NAME": "\u0420\u0430\u0437\u043c\u0435\u0440 \u0444\u043e\u0442\u043e", "VALUE": null},
        "ACODE13200": {
            "NAME": "\u0420\u0430\u0437\u0440\u044f\u0434\u043d\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE13300": {"NAME": "\u0420\u0430\u0437\u044a\u0435\u043c", "VALUE": null},
        "ACODE13400": {"NAME": "\u0420\u0438\u0441\u0443\u043d\u043e\u043a", "VALUE": null},
        "ACODE13500": {"NAME": "\u0420\u043e\u0441\u043f\u0438\u0441\u044c", "VALUE": null},
        "ACODE13600": {
            "NAME": "\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0440\u0435\u0437\u043a\u0438",
            "VALUE": null
        },
        "ACODE13700": {
            "NAME": "\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0447\u0442\u0435\u043d\u0438\u044f",
            "VALUE": null
        },
        "ACODE13800": {"NAME": "\u0421\u043c\u0435\u043d\u043d\u0430\u044f", "VALUE": null},
        "ACODE13900": {
            "NAME": "\u0421\u043c\u0435\u043d\u043d\u044b\u0435 \u043b\u0435\u0437\u0432\u0438\u044f",
            "VALUE": null
        },
        "ACODE14000": {
            "NAME": "\u0421\u043c\u0435\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
            "VALUE": null
        },
        "ACODE14100": {
            "NAME": "\u0421\u043f\u043e\u0441\u043e\u0431 \u0437\u0430\u043a\u043b\u0435\u0439\u043a\u0438",
            "VALUE": null
        },
        "ACODE14200": {
            "NAME": "\u0422\u0432\u0435\u0440\u0434\u043e\u0441\u0442\u044c\/\u043c\u044f\u0433\u043a\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE14300": {
            "NAME": "\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f \u0441\u0435\u043d\u0441\u043e\u0440\u0430",
            "VALUE": null
        },
        "ACODE14400": {
            "NAME": "\u0422\u0438\u043f",
            "VALUE": "\u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f"
        },
        "ACODE14500": {"NAME": "\u0422\u0438\u043f \u0431\u0443\u043c\u0430\u0433\u0438", "VALUE": null},
        "ACODE14600": {"NAME": "\u0422\u0438\u043f \u043a\u043d\u0438\u0436\u043a\u0438", "VALUE": null},
        "ACODE14700": {
            "NAME": "\u0422\u0438\u043f \u043a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u044f",
            "VALUE": null
        },
        "ACODE14800": {"NAME": "\u0422\u0438\u043f \u043b\u0430\u043c\u043f\u044b", "VALUE": null},
        "ACODE14900": {"NAME": "\u0422\u0438\u043f \u043e\u0431\u043b\u043e\u0436\u043a\u0438", "VALUE": null},
        "ACODE15000": {"NAME": "\u0422\u0438\u043f \u043f\u0430\u043f\u043a\u0438", "VALUE": null},
        "ACODE15100": {
            "NAME": "\u0422\u0438\u043f \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438",
            "VALUE": null
        },
        "ACODE15200": {"NAME": "\u0422\u0438\u043f \u0440\u0443\u0447\u043a\u0438", "VALUE": null},
        "ACODE15300": {
            "NAME": "\u0422\u0438\u043f \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430",
            "VALUE": null
        },
        "ACODE15400": {"NAME": "\u0422\u0438\u043f \u0446\u043e\u043a\u043e\u043b\u044f", "VALUE": null},
        "ACODE15500": {"NAME": "\u0422\u0438\u043f \u0447\u0435\u0440\u043d\u0438\u043b", "VALUE": null},
        "ACODE15600": {
            "NAME": "\u0422\u0438\u043f \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043b\u0438\u0442\u0430",
            "VALUE": null
        },
        "ACODE15700": {"NAME": "\u0422\u0438\u043f\u043e\u0440\u0430\u0437\u043c\u0435\u0440", "VALUE": null},
        "ACODE15800": {"NAME": "\u0422\u043e\u043b\u0449\u0438\u043d\u0430", "VALUE": null},
        "ACODE15900": {
            "NAME": "\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u0433\u0440\u0438\u0444\u0435\u043b\u044f",
            "VALUE": null
        },
        "ACODE16000": {
            "NAME": "\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u043a\u043e\u0440\u0435\u0448\u043a\u0430",
            "VALUE": null
        },
        "ACODE16100": {
            "NAME": "\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u043f\u0438\u0441\u044c\u043c\u0430",
            "VALUE": null
        },
        "ACODE16200": {
            "NAME": "\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u0430",
            "VALUE": null
        },
        "ACODE16300": {
            "NAME": "\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u043f\u043b\u0435\u043d\u043a\u0438",
            "VALUE": null
        },
        "ACODE16400": {"NAME": "\u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435", "VALUE": null},
        "ACODE16500": {"NAME": "\u0423\u0433\u043e\u043b", "VALUE": null},
        "ACODE16600": {"NAME": "\u0423\u043f\u0430\u043a\u043e\u0432\u043a\u0430", "VALUE": null},
        "ACODE16700": {
            "NAME": "\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0441\u0435\u043a\u0440\u0435\u0442\u043d\u043e\u0441\u0442\u0438",
            "VALUE": null
        },
        "ACODE16800": {"NAME": "\u0424\u0430\u043a\u0442\u0443\u0440\u0430", "VALUE": null},
        "ACODE16900": {"NAME": "\u0424\u043b\u0438\u0441", "VALUE": null},
        "ACODE17000": {"NAME": "\u0424\u043e\u0440\u043c\u0430", "VALUE": null},
        "ACODE17100": {
            "NAME": "\u0424\u043e\u0440\u043c\u0430 \u043a\u043e\u0440\u043f\u0443\u0441\u0430",
            "VALUE": null
        },
        "ACODE17200": {"NAME": "\u0424\u043e\u0440\u043c\u0430\u0442", "VALUE": null},
        "ACODE17300": {"NAME": "\u0426\u0432\u0435\u0442", "VALUE": "\u0441\u0435\u0440\u044b\u0439"},
        "ACODE17400": {"NAME": "\u0426\u0432\u0435\u0442 \u0431\u043b\u043e\u043a\u0430", "VALUE": null},
        "ACODE17500": {
            "NAME": "\u0426\u0432\u0435\u0442 \u0440\u0435\u0437\u0438\u043d\u043a\u0438",
            "VALUE": null
        },
        "ACODE17600": {"NAME": "\u0426\u0432\u0435\u0442 \u0441\u0440\u0435\u0437\u0430", "VALUE": null},
        "ACODE17700": {"NAME": "\u0426\u0432\u0435\u0442 \u0447\u0435\u0440\u043d\u0438\u043b", "VALUE": null},
        "ACODE17800": {"NAME": "\u0426\u043e\u043a\u043e\u043b\u044c", "VALUE": null},
        "ACODE17900": {"NAME": "\u0428\u0438\u0440\u0438\u043d\u0430", "VALUE": null},
        "ACODE18000": {
            "NAME": "\u0428\u0438\u0440\u0438\u043d\u0430 \u043a\u043e\u0440\u0435\u0448\u043a\u0430",
            "VALUE": null
        },
        "ACODE18100": {
            "NAME": "\u0428\u0438\u0440\u0438\u043d\u0430 \u043b\u0435\u0437\u0432\u0438\u044f",
            "VALUE": null
        },
        "ACODE18200": {
            "NAME": "\u0428\u0438\u0440\u0438\u043d\u0430 \u043b\u0435\u043d\u0442\u044b",
            "VALUE": null
        },
        "ACODE18300": {
            "NAME": "\u0428\u0438\u0440\u0438\u043d\u0430 \u0440\u0443\u043b\u043e\u043d\u0430",
            "VALUE": null
        },
        "ACODE18400": {"NAME": "\u042d\u0444\u0444\u0435\u043a\u0442\u044b", "VALUE": null},
        "ACODE18500": {"NAME": "\u042f\u0437\u044b\u043a", "VALUE": null},
        "ACODE18600": {"NAME": "\u042f\u0440\u043a\u043e\u0441\u0442\u044c ISO", "VALUE": null},
        "ACODE18700": {
            "NAME": "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c",
            "VALUE": "deVENTE"
        },
        "ACODE18800": {
            "NAME": "\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0424\u0430\u0440\u043c",
            "VALUE": null
        },
        "ACODE18900": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0448\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u043b\u0438\u0441\u0442\u043e\u0432",
            "VALUE": null
        },
        "ACODE19000": {
            "NAME": "\u0422\u0438\u043f\u043e\u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u043a\u043e\u0431",
            "VALUE": null
        },
        "ACODE19100": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0444\u043e\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u043b\u0438\u0441\u0442\u043e\u0432",
            "VALUE": null
        },
        "ACODE19200": {
            "NAME": "\u041a\u0440\u0430\u0442\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043a\u0430\u0437\u0430",
            "VALUE": null
        },
        "ACODE19300": {"NAME": "\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440", "VALUE": null},
        "ACODE19400": {
            "NAME": "\u041e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043a\u0438\u0441\u0442\u043e\u0447\u043a\u0438",
            "VALUE": null
        },
        "ACODE19500": {
            "NAME": "\u0426\u0432\u0435\u0442\u043e\u0432\u043e\u0439 \u043f\u0438\u0433\u043c\u0435\u043d\u0442",
            "VALUE": null
        },
        "ACODE19600": {"NAME": "\u041c\u0430\u0433\u043d\u0438\u0442", "VALUE": null},
        "ACODE19700": {
            "NAME": "\u0420\u0435\u043b\u044c\u0435\u0444\u043d\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE19800": {"NAME": "\u0421\u0435\u0440\u0438\u044f", "VALUE": null},
        "ACODE19900": {
            "NAME": "\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE20000": {
            "NAME": "\u0426\u0432\u0435\u0442 \u043e\u0431\u043b\u043e\u0436\u043a\u0438",
            "VALUE": null
        },
        "ACODE20100": {"NAME": "\u041f\u0440\u0435\u0434\u043c\u0435\u0442", "VALUE": null},
        "ACODE20300": {"NAME": "\u0421\u0442\u043e\u043a", "VALUE": null},
        "ACODE20400": {"NAME": "\u0410\u043a\u0446\u0438\u044f \u041a\u043e\u0440\u043f", "VALUE": null},
        "ACODE20500": {
            "NAME": "\u0426\u0432\u0435\u0442 \u043a\u043e\u0440\u043f\u0443\u0441\u0430",
            "VALUE": null
        },
        "ACODE20600": {
            "NAME": "\u0420\u0430\u0441\u043f\u0440\u043e\u0434\u0430\u0436\u0430 \u041a\u043e\u0440\u043f",
            "VALUE": null
        },
        "ACODE20700": {"NAME": "\u041c\u0430\u0441\u0448\u0442\u0430\u0431", "VALUE": null},
        "ACODE20800": {
            "NAME": "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c",
            "VALUE": null
        },
        "ACODE20900": {"NAME": "\u0422\u0438\u0441\u043d\u0435\u043d\u0438\u0435", "VALUE": null},
        "ACODE21000": {"NAME": "\u0421\u0435\u0447\u0435\u043d\u0438\u0435", "VALUE": null},
        "ACODE21100": {"NAME": "\u041e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f", "VALUE": null},
        "ACODE21200": {
            "NAME": "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u044f",
            "VALUE": null
        },
        "ACODE21300": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043c\u0435\u0442\u0430\u043b\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0443\u0433\u043e\u043b\u043a\u043e\u0432",
            "VALUE": null
        },
        "ACODE21400": {
            "NAME": "\u0420\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u0436\u0438\u043c\u0430",
            "VALUE": null
        },
        "ACODE21500": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0440\u0443\u0447\u0435\u043a",
            "VALUE": null
        },
        "ACODE21600": {"NAME": "\u0413\u043e\u0434", "VALUE": null},
        "ACODE21700": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u043b\u043e\u043a\u043e\u0432",
            "VALUE": null
        },
        "ACODE21800": {
            "NAME": "\u0414\u043b\u0438\u043d\u0430 \u043d\u0430\u043c\u043e\u0442\u043a\u0438",
            "VALUE": null
        },
        "ACODE21900": {
            "NAME": "\u0428\u0438\u0440\u0438\u043d\u0430 \u0431\u0430\u0433\u0435\u0442\u0430",
            "VALUE": null
        },
        "ACODE22000": {"NAME": "\u041d\u043e\u043c\u0438\u043d\u0430\u043b", "VALUE": null},
        "ACODE22100": {
            "NAME": "\u0422\u0438\u043f \u043e\u0441\u043d\u0430\u0441\u0442\u043a\u0438",
            "VALUE": null
        },
        "ACODE22200": {
            "NAME": "\u0414\u0438\u0430\u043c\u0435\u0442\u0440 \u0432\u0442\u0443\u043b\u043a\u0438",
            "VALUE": null
        },
        "ACODE22300": {
            "NAME": "\u0414\u0438\u0430\u043c\u0435\u0442\u0440 \u0440\u0443\u043b\u043e\u043d\u0430",
            "VALUE": null
        },
        "ACODE22400": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0430 \u043b\u0438\u0441\u0442\u0435",
            "VALUE": null
        },
        "ACODE22500": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044d\u0442\u0438\u043a\u0435\u0442\u043e\u043a \u0432 \u0440\u0443\u043b\u043e\u043d\u0435",
            "VALUE": null
        },
        "ACODE22600": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",
            "VALUE": null
        },
        "ACODE22700": {
            "NAME": "\u0420\u0430\u0437\u043c\u0435\u0440 \u0441\u0442\u0440\u043e\u043a\u0438",
            "VALUE": null
        },
        "ACODE22800": {
            "NAME": "\u0420\u0430\u0437\u043c\u0435\u0440 \u043e\u0442\u0442\u0438\u0441\u043a\u0430",
            "VALUE": null
        },
        "ACODE22900": {"NAME": "\u0422\u0435\u043a\u0441\u0442\u0443\u0440\u0430", "VALUE": null},
        "ACODE23000": {
            "NAME": "\u0412\u044b\u0441\u043e\u0442\u0430 \u0432 \u0441\u043e\u0431\u0440\u0430\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435",
            "VALUE": null
        }
    }
}, {
    "ID": "2047933",
    "LID": "s1",
    "FUSER_ID": "7035938",
    "ORDER_ID": null,
    "PRODUCT_ID": "23266",
    "PRODUCT_PRICE_ID": "128990",
    "NAME": "\u041f\u0430\u043f\u043a\u0430 \u0434\u043b\u044f \u0440\u0438\u0441\u043e\u0432\u0430\u043d\u0438\u044f \u04103, 10\u043b. , 120\u0433\u0440 \/ \u043a\u0432. \u043c, \"\u0421\u0430\u0448\u0430\",  \u041b\u0438\u043b\u0438\u044f \u0425\u043e\u043b\u0434\u0438\u043d\u0433",
    "PRICE": "53.4000",
    "CURRENCY": "RUB",
    "BASE_PRICE": "53.4000",
    "VAT_INCLUDED": "Y",
    "DATE_INSERT": {},
    "DATE_UPDATE": {},
    "WEIGHT": "0.00",
    "QUANTITY": "1.00",
    "DELAY": "N",
    "CAN_BUY": "Y",
    "MODULE": "catalog",
    "PRODUCT_PROVIDER_CLASS": "CCatalogProductProvider",
    "NOTES": "\u041a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432",
    "DETAIL_PAGE_URL": "\/catalog\/bumaga_i_bumazhnye_izdeliya\/bumaga_dlya_orgtekhniki\/bumaga_dlya_chertezhnykh_rabot_i_kopirovaniya\/papki_i_albomy_dlya_chercheniya\/papka_dlya_risovaniya_a3_10l_120gr_kv_m_sasha_liliya_kholdin\/23266\/",
    "DISCOUNT_PRICE": "0.0000",
    "CATALOG_XML_ID": "clothes_s1",
    "PRODUCT_XML_ID": "23266",
    "DISCOUNT_NAME": null,
    "DISCOUNT_VALUE": null,
    "DISCOUNT_COUPON": null,
    "VAT_RATE": "0.1800",
    "SUBSCRIBE": "N",
    "RESERVED": "N",
    "RESERVE_QUANTITY": null,
    "BARCODE_MULTI": "N",
    "CUSTOM_PRICE": "N",
    "DIMENSIONS": "a:3:{s:5:\"WIDTH\";s:1:\"0\";s:6:\"HEIGHT\";s:1:\"0\";s:6:\"LENGTH\";s:1:\"0\";}",
    "TYPE": null,
    "SET_PARENT_ID": null,
    "MEASURE_CODE": "796",
    "MEASURE_NAME": "\u0448\u0442",
    "CALLBACK_FUNC": null,
    "ORDER_CALLBACK_FUNC": null,
    "CANCEL_CALLBACK_FUNC": null,
    "PAY_CALLBACK_FUNC": null,
    "RECOMMENDATION": null,
    "SORT": "100",
    "DETAIL_PICTURE": {
        "ID": "201461",
        "TIMESTAMP_X": "14.07.2017 03:52:43",
        "MODULE_ID": "iblock",
        "HEIGHT": "600",
        "WIDTH": "600",
        "FILE_SIZE": "116849",
        "CONTENT_TYPE": "image\/jpeg",
        "SUBDIR": "iblock\/e9b",
        "FILE_NAME": "e9b6853ca0b67a344ed991aa637bd3a3.jpg",
        "ORIGINAL_NAME": "papka-d-risovaniya-a3-10l-sasha.jpg",
        "DESCRIPTION": "",
        "HANDLER_ID": null,
        "EXTERNAL_ID": "3c099104eb87c3772c1e8182d29f07bf",
        "~src": false,
        "SRC": "\/upload\/iblock\/e9b\/e9b6853ca0b67a344ed991aa637bd3a3.jpg"
    },
    "PROPERTY": {
        "TITLE": {
            "NAME": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043e\u043a\u043d\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430",
            "VALUE": "\u041f\u0430\u043f\u043a\u0430 \u0434\u043b\u044f \u0440\u0438\u0441\u043e\u0432\u0430\u043d\u0438\u044f \u04103, 10\u043b., 120\u0433\u0440\/\u043a\u0432.\u043c, &quot;\u0421\u0430\u0448\u0430&quot;,  \u041b\u0438\u043b\u0438\u044f \u0425\u043e\u043b\u0434\u0438\u043d\u0433"
        },
        "KEYWORDS": {
            "NAME": "\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430",
            "VALUE": "\u041f\u0430\u043f\u043a\u0430 \u0434\u043b\u044f \u0440\u0438\u0441\u043e\u0432\u0430\u043d\u0438\u044f \u04103, 10\u043b., 120\u0433\u0440\/\u043a\u0432.\u043c, &quot;\u0421\u0430\u0448\u0430&quot;,  \u041b\u0438\u043b\u0438\u044f \u0425\u043e\u043b\u0434\u0438\u043d\u0433"
        },
        "META_DESCRIPTION": {
            "NAME": "\u041c\u0435\u0442\u0430-\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",
            "VALUE": null
        },
        "GET_REST_COUNT_DATE": {
            "NAME": "\u0414\u0430\u0442\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043b-\u0432\u0430 \u0447\u0435\u0440\u0435\u0437 get_rest_count",
            "VALUE": null
        },
        "USERCREATE": {"NAME": "userCreate", "VALUE": "196665"},
        "DATECREATE": {"NAME": "dateCreate", "VALUE": "1441298469"},
        "PRODUCERUSER": {"NAME": "producerUser", "VALUE": "196694"},
        "PRODUCERDATE": {"NAME": "producerDate", "VALUE": "1313515362"},
        "ARTNUMBER": {"NAME": "\u0410\u0440\u0442\u0438\u043a\u0443\u043b", "VALUE": "24066"},
        "CODE": {"NAME": "\u041a\u043e\u0434", "VALUE": "151021"},
        "IMAGES": {
            "NAME": "\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",
            "VALUE": null
        },
        "COUNTRY": {"NAME": "\u0421\u0442\u0440\u0430\u043d\u0430", "VALUE": null},
        "NEWPRODUCT": {"NAME": "\u041d\u043e\u0432\u0438\u043d\u043a\u0430", "VALUE": null},
        "SALELEADER": {"NAME": "\u0425\u0438\u0442 \u043f\u0440\u043e\u0434\u0430\u0436", "VALUE": "2"},
        "RATE": {"NAME": "\u0420\u0435\u0439\u0442\u0438\u043d\u0433", "VALUE": null},
        "MINSTOCK": {
            "NAME": "\u0428\u0442\u0443\u043a \u0432 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0435",
            "VALUE": "30"
        },
        "MINCOUNT": {
            "NAME": "\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",
            "VALUE": "1"
        },
        "FAVORITETOVARS": {"NAME": "\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435", "VALUE": ""},
        "SPECIALOFFER": {
            "NAME": "\u0421\u043f\u0435\u0446\u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435",
            "VALUE": null
        },
        "RECOMMEND": {
            "NAME": "\u0421 \u044d\u0442\u0438\u043c \u0442\u043e\u0432\u0430\u0440\u043e\u043c \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c",
            "VALUE": null
        },
        "vote_count": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u0432\u0448\u0438\u0445",
            "VALUE": "1"
        },
        "vote_sum": {
            "NAME": "\u0421\u0443\u043c\u043c\u0430 \u043e\u0446\u0435\u043d\u043e\u043a",
            "VALUE": "4"
        },
        "rating": {"NAME": "\u0420\u0435\u0439\u0442\u0438\u043d\u0433", "VALUE": "3.2"},
        "ACODE600": {"NAME": "Moleskine", "VALUE": null},
        "ACODE700": {
            "NAME": "\u0410\u043a\u0432\u0430\u0440\u0435\u043b\u044c\u043d\u044b\u0435",
            "VALUE": null
        },
        "ACODE800": {"NAME": "\u0411\u0435\u043b\u0438\u0437\u043d\u0430 CIE", "VALUE": null},
        "ACODE900": {"NAME": "\u0411\u043b\u0435\u0441\u0442\u043a\u0438", "VALUE": null},
        "ACODE1000": {"NAME": "\u0411\u043b\u043e\u043a", "VALUE": null},
        "ACODE1100": {"NAME": "\u0411\u0443\u043c\u0430\u0433\u0430", "VALUE": null},
        "ACODE1200": {"NAME": "\u0412\u0430\u043b\u044f\u043d\u0438\u0435", "VALUE": null},
        "ACODE1300": {"NAME": "\u0412\u0435\u0441", "VALUE": null},
        "ACODE1400": {"NAME": "\u0412\u0438\u0434", "VALUE": null},
        "ACODE1500": {
            "NAME": "\u0412\u0438\u0434 \u0430\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u0430",
            "VALUE": null
        },
        "ACODE1600": {
            "NAME": "\u0412\u0438\u0434 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430",
            "VALUE": null
        },
        "ACODE1700": {
            "NAME": "\u0412\u0438\u0434 \u0437\u0430\u0441\u0442\u0435\u0436\u043a\u0438",
            "VALUE": null
        },
        "ACODE1800": {"NAME": "\u0412\u0438\u0434 \u043f\u0440\u0443\u0436\u0438\u043d\u044b", "VALUE": null},
        "ACODE1900": {"NAME": "\u0412\u0438\u0434 \u0441\u0442\u0435\u0440\u0436\u043d\u044f", "VALUE": null},
        "ACODE2000": {"NAME": "\u0412\u043e\u0437\u0440\u0430\u0441\u0442", "VALUE": null},
        "ACODE2100": {"NAME": "\u0412\u043e\u0440\u0441", "VALUE": null},
        "ACODE2200": {"NAME": "\u0412\u0440\u0430\u0449\u0435\u043d\u0438\u0435", "VALUE": null},
        "ACODE2300": {
            "NAME": "\u0412\u044b\u0440\u0430\u0449\u0438\u0432\u0430\u043d\u0438\u0435 \u043a\u0440\u0438\u0441\u0442\u0430\u043b\u043b\u043e\u0432",
            "VALUE": null
        },
        "ACODE2400": {"NAME": "\u0412\u044b\u0441\u043e\u0442\u0430", "VALUE": null},
        "ACODE2500": {
            "NAME": "\u0412\u044b\u0441\u043e\u0442\u0430 \u0441\u0442\u043e\u043f\u044b",
            "VALUE": null
        },
        "ACODE2600": {"NAME": "\u0412\u044b\u0448\u0438\u0432\u0430\u043d\u0438\u0435", "VALUE": null},
        "ACODE2700": {"NAME": "\u0412\u044f\u0437\u0430\u043d\u0438\u0435", "VALUE": null},
        "ACODE2800": {"NAME": "\u0413\u0440\u0430\u0432\u044e\u0440\u044b", "VALUE": null},
        "ACODE2900": {"NAME": "\u0414\u0438\u0430\u043c\u0435\u0442\u0440", "VALUE": null},
        "ACODE3000": {
            "NAME": "\u0414\u0438\u0430\u043c\u0435\u0442\u0440 \u0440\u0435\u0437\u0438\u043d\u043a\u0438",
            "VALUE": null
        },
        "ACODE3100": {"NAME": "\u0414\u043b\u0438\u043d\u0430", "VALUE": null},
        "ACODE3200": {
            "NAME": "\u0414\u043b\u0438\u043d\u0430 \u0440\u0435\u0437\u0430\u043a\u0430",
            "VALUE": null
        },
        "ACODE3300": {"NAME": "\u0414\u043b\u0438\u043d\u0430 \u0448\u043a\u0430\u043b\u044b", "VALUE": null},
        "ACODE3400": {
            "NAME": "\u0414\u043b\u044f \u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043b\u0435\u0439",
            "VALUE": null
        },
        "ACODE3500": {"NAME": "\u0414\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u044b", "VALUE": null},
        "ACODE3600": {"NAME": "\u0415\u043c\u043a\u043e\u0441\u0442\u044c", "VALUE": null},
        "ACODE3700": {"NAME": "\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438", "VALUE": null},
        "ACODE3800": {"NAME": "\u0417\u0430\u0441\u0442\u0435\u0436\u043a\u0430", "VALUE": null},
        "ACODE3900": {
            "NAME": "\u0418\u0433\u0440\u0443\u0448\u043a\u0438 \u0438\u0437 \u043f\u043e\u043c\u043f\u043e\u043d\u043e\u0432",
            "VALUE": null
        },
        "ACODE4000": {"NAME": "\u0418\u0437 \u0433\u0438\u043f\u0441\u0430", "VALUE": null},
        "ACODE4100": {"NAME": "\u0418\u0437 \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0438", "VALUE": null},
        "ACODE4200": {"NAME": "\u0418\u0437 \u043f\u0435\u0441\u043a\u0430", "VALUE": null},
        "ACODE4300": {
            "NAME": "\u0418\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0435\u0439",
            "VALUE": null
        },
        "ACODE4500": {"NAME": "\u041a\u043b\u0430\u0441\u0441", "VALUE": null},
        "ACODE4700": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432 \u043d\u0430\u0431\u043e\u0440\u0435",
            "VALUE": null
        },
        "ACODE4800": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0435",
            "VALUE": null
        },
        "ACODE4900": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0438\u0437\u0438\u0442\u043e\u043a",
            "VALUE": null
        },
        "ACODE5000": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043d\u043e\u043f\u043e\u043a",
            "VALUE": null
        },
        "ACODE5100": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043e\u043b\u0435\u0446",
            "VALUE": null
        },
        "ACODE5200": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0440\u0443\u0433\u043e\u0432",
            "VALUE": null
        },
        "ACODE5300": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u0438\u0441\u0442\u043e\u0432",
            "VALUE": "10\u043b."
        },
        "ACODE5400": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u0438\u0441\u0442\u043e\u0432 \u0432 \u0431\u043b\u043e\u043a\u043d\u043e\u0442\u0435",
            "VALUE": null
        },
        "ACODE5500": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u0438\u0441\u0442\u043e\u0432 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u043f\u043b\u0435\u0442\u0430",
            "VALUE": null
        },
        "ACODE5600": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0439",
            "VALUE": null
        },
        "ACODE5700": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0430\u043d\u0435\u043b\u0435\u0439",
            "VALUE": null
        },
        "ACODE5800": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0444\u043e\u0440\u0430\u0446\u0438\u0438",
            "VALUE": null
        },
        "ACODE5900": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",
            "VALUE": null
        },
        "ACODE6000": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043e\u0432",
            "VALUE": null
        },
        "ACODE6100": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u043e\u0437\u0435\u0442\u043e\u043a",
            "VALUE": null
        },
        "ACODE6200": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0435\u043a\u0446\u0438\u0439",
            "VALUE": null
        },
        "ACODE6300": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u043e\u0435\u0432",
            "VALUE": null
        },
        "ACODE6400": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u043e\u0440\u043e\u043d \u0434\u043b\u044f \u043f\u0435\u0447\u0430\u0442\u0438",
            "VALUE": null
        },
        "ACODE6500": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a",
            "VALUE": null
        },
        "ACODE6600": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0444\u0430\u0439\u043b\u043e\u0432",
            "VALUE": null
        },
        "ACODE6700": {"NAME": "\u0410\u0440\u043e\u043c\u0430\u0442", "VALUE": null},
        "ACODE6800": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0444\u043e\u0442\u043e",
            "VALUE": null
        },
        "ACODE6900": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0446\u0432\u0435\u0442\u043e\u0432",
            "VALUE": null
        },
        "ACODE7000": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0446\u0432\u0435\u0442\u043e\u0432 \u0432 \u043d\u0430\u0431\u043e\u0440\u0435",
            "VALUE": null
        },
        "ACODE7100": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0448\u0442\u0443\u043a \u0432 \u043d\u0430\u0431\u043e\u0440\u0435",
            "VALUE": null
        },
        "ACODE7200": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0448\u0442\u0443\u043a \u0432 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0435",
            "VALUE": null
        },
        "ACODE7300": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",
            "VALUE": null
        },
        "ACODE7400": {"NAME": "\u041a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u0435", "VALUE": null},
        "ACODE7500": {"NAME": "\u041a\u0443\u043a\u0443\u0440\u0443\u0437\u0430", "VALUE": null},
        "ACODE7600": {"NAME": "\u041b\u0430\u043c\u043f\u0430", "VALUE": null},
        "ACODE7700": {"NAME": "\u041b\u0438\u043d\u043e\u0432\u043a\u0430", "VALUE": null},
        "ACODE7800": {"NAME": "\u041b\u0438\u0446\u0435\u043d\u0437\u0438\u044f", "VALUE": null},
        "ACODE7900": {
            "NAME": "\u041c\u0430\u0441\u043b\u044f\u043d\u0430\u044f \u043e\u0441\u043d\u043e\u0432\u0430 \u0447\u0435\u0440\u043d\u0438\u043b",
            "VALUE": null
        },
        "ACODE8000": {"NAME": "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b", "VALUE": null},
        "ACODE8100": {
            "NAME": "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043a\u043e\u0440\u043f\u0443\u0441\u0430",
            "VALUE": null
        },
        "ACODE8200": {
            "NAME": "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043e\u0431\u043b\u043e\u0436\u043a\u0438",
            "VALUE": null
        },
        "ACODE8300": {
            "NAME": "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0440\u0443\u0447\u0435\u043a",
            "VALUE": null
        },
        "ACODE8400": {"NAME": "\u041c\u0435\u0442\u0440\u0430\u0436", "VALUE": null},
        "ACODE8500": {"NAME": "\u041c\u043e\u0434\u0435\u043b\u044c", "VALUE": null},
        "ACODE8600": {"NAME": "\u041c\u043e\u0449\u043d\u043e\u0441\u0442\u044c", "VALUE": null},
        "ACODE8700": {"NAME": "\u041d\u0430\u0431\u043e\u0440", "VALUE": null},
        "ACODE8800": {"NAME": "\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435", "VALUE": null},
        "ACODE8900": {"NAME": "\u041d\u0430\u043a\u043e\u043d\u0435\u0447\u043d\u0438\u043a", "VALUE": null},
        "ACODE9000": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u043d\u043e\u0439 \u0432\u044b\u0440\u0443\u0431\u043a\u0438",
            "VALUE": null
        },
        "ACODE9100": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0432\u0442\u0443\u043b\u043a\u0438",
            "VALUE": null
        },
        "ACODE9200": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043a\u0430\u0440\u043c\u0430\u043d\u0430",
            "VALUE": null
        },
        "ACODE9300": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043b\u0430\u0441\u0442\u0438\u043a\u0430",
            "VALUE": null
        },
        "ACODE9400": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043c\u0435\u0442\u0430\u043b\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0445",
            "VALUE": null
        },
        "ACODE9500": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043d\u0430\u0434\u043f\u0438\u0441\u0438",
            "VALUE": null
        },
        "ACODE9600": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043e\u0433\u0440 \u043b\u0438\u043d\u0435\u0439\u043a\u0438",
            "VALUE": null
        },
        "ACODE9700": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0438\/\u043f\u043b\u0430\u0441\u0442\u0431\u043e\u043a\u0441\u0430",
            "VALUE": null
        },
        "ACODE9800": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0443\u0448\u0435\u043a",
            "VALUE": null
        },
        "ACODE9900": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0444\u043e\u0440\u0437\u0430\u0446\u0430",
            "VALUE": null
        },
        "ACODE10000": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0444\u0443\u0442\u043b\u044f\u0440\u0430",
            "VALUE": null
        },
        "ACODE10100": {"NAME": "\u041d\u0430\u043c\u043e\u0442\u043a\u0430", "VALUE": null},
        "ACODE10200": {"NAME": "\u041d\u043e\u043c\u0435\u0440", "VALUE": null},
        "ACODE10300": {"NAME": "\u041e\u0431\u043b\u043e\u0436\u043a\u0430", "VALUE": null},
        "ACODE10400": {"NAME": "\u041e\u0431\u044a\u0435\u043c", "VALUE": null},
        "ACODE10500": {
            "NAME": "\u041e\u0431\u044a\u0435\u043c \u043a\u043e\u0440\u0437\u0438\u043d\u044b",
            "VALUE": null
        },
        "ACODE10600": {
            "NAME": "\u041e\u0431\u044a\u0435\u043c \u043f\u0430\u043c\u044f\u0442\u0438",
            "VALUE": null
        },
        "ACODE10700": {"NAME": "\u041e\u043a\u043d\u043e", "VALUE": null},
        "ACODE10800": {"NAME": "\u041e\u0441\u043d\u043e\u0432\u0430", "VALUE": null},
        "ACODE10900": {"NAME": "\u041f\u0435\u0440\u0444\u043e\u0440\u0430\u0446\u0438\u044f", "VALUE": null},
        "ACODE11000": {"NAME": "\u041f\u0438\u0442\u0430\u043d\u0438\u0435", "VALUE": null},
        "ACODE11100": {"NAME": "\u041f\u043b\u0435\u0442\u0435\u043d\u0438\u0435", "VALUE": null},
        "ACODE11200": {
            "NAME": "\u041f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u044c",
            "VALUE": "120\u0433\u0440\/\u043a\u0432.\u043c"
        },
        "ACODE11300": {
            "NAME": "\u041f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE11400": {
            "NAME": "\u041f\u043e\u0434\u0435\u043b\u043a\u0438 \u0441\u0432\u043e\u0438\u043c\u0438 \u0440\u0443\u043a\u0430\u043c\u0438",
            "VALUE": null
        },
        "ACODE11500": {"NAME": "\u041f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0430", "VALUE": null},
        "ACODE11600": {
            "NAME": "\u041f\u043e\u0434\u0441\u043a\u0430\u0437 (\u043a\u0443\u0434\u0430-\u043a\u043e\u043c\u0443)",
            "VALUE": null
        },
        "ACODE11700": {"NAME": "\u041f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0430", "VALUE": null},
        "ACODE11800": {"NAME": "\u041f\u043e\u043a\u0440\u044b\u0442\u0438\u0435", "VALUE": null},
        "ACODE11900": {
            "NAME": "\u041f\u043e\u043b\u043e\u0432\u0430\u044f \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE12000": {"NAME": "\u041f\u0440\u0435\u0434\u043c\u0435\u0442", "VALUE": null},
        "ACODE12100": {
            "NAME": "\u041f\u0440\u0438\u0432\u043e\u0434 \u043f\u0435\u0440\u0444\u043e\u0440\u0430\u0446\u0438\u0438",
            "VALUE": null
        },
        "ACODE12200": {
            "NAME": "\u041f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE12400": {
            "NAME": "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE12500": {"NAME": "\u041f\u0440\u043e\u043a\u043b\u0435\u0439\u043a\u0430", "VALUE": null},
        "ACODE12600": {
            "NAME": "\u0420\u0430\u0431\u043e\u0447\u0438\u0439 \u0446\u0438\u043a\u043b",
            "VALUE": null
        },
        "ACODE12700": {"NAME": "\u0420\u0430\u0437\u043c\u0435\u0440", "VALUE": null},
        "ACODE12800": {
            "NAME": "\u0420\u0430\u0437\u043c\u0435\u0440 (\u0444\u043e\u0440\u043c\u0430\u0442)",
            "VALUE": null
        },
        "ACODE12900": {
            "NAME": "\u0420\u0430\u0437\u043c\u0435\u0440 \u0430\u043b\u044c\u0431\u043e\u043c\u0430",
            "VALUE": null
        },
        "ACODE13000": {
            "NAME": "\u0420\u0430\u0437\u043c\u0435\u0440 \u043f\u0440\u0443\u0436\u0438\u043d\u044b",
            "VALUE": null
        },
        "ACODE13100": {"NAME": "\u0420\u0430\u0437\u043c\u0435\u0440 \u0444\u043e\u0442\u043e", "VALUE": null},
        "ACODE13200": {
            "NAME": "\u0420\u0430\u0437\u0440\u044f\u0434\u043d\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE13300": {"NAME": "\u0420\u0430\u0437\u044a\u0435\u043c", "VALUE": null},
        "ACODE13400": {"NAME": "\u0420\u0438\u0441\u0443\u043d\u043e\u043a", "VALUE": null},
        "ACODE13500": {"NAME": "\u0420\u043e\u0441\u043f\u0438\u0441\u044c", "VALUE": null},
        "ACODE13600": {
            "NAME": "\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0440\u0435\u0437\u043a\u0438",
            "VALUE": null
        },
        "ACODE13700": {
            "NAME": "\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0447\u0442\u0435\u043d\u0438\u044f",
            "VALUE": null
        },
        "ACODE13800": {"NAME": "\u0421\u043c\u0435\u043d\u043d\u0430\u044f", "VALUE": null},
        "ACODE13900": {
            "NAME": "\u0421\u043c\u0435\u043d\u043d\u044b\u0435 \u043b\u0435\u0437\u0432\u0438\u044f",
            "VALUE": null
        },
        "ACODE14000": {
            "NAME": "\u0421\u043c\u0435\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
            "VALUE": null
        },
        "ACODE14100": {
            "NAME": "\u0421\u043f\u043e\u0441\u043e\u0431 \u0437\u0430\u043a\u043b\u0435\u0439\u043a\u0438",
            "VALUE": null
        },
        "ACODE14200": {
            "NAME": "\u0422\u0432\u0435\u0440\u0434\u043e\u0441\u0442\u044c\/\u043c\u044f\u0433\u043a\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE14300": {
            "NAME": "\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f \u0441\u0435\u043d\u0441\u043e\u0440\u0430",
            "VALUE": null
        },
        "ACODE14400": {"NAME": "\u0422\u0438\u043f", "VALUE": null},
        "ACODE14500": {"NAME": "\u0422\u0438\u043f \u0431\u0443\u043c\u0430\u0433\u0438", "VALUE": null},
        "ACODE14600": {"NAME": "\u0422\u0438\u043f \u043a\u043d\u0438\u0436\u043a\u0438", "VALUE": null},
        "ACODE14700": {
            "NAME": "\u0422\u0438\u043f \u043a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u044f",
            "VALUE": null
        },
        "ACODE14800": {"NAME": "\u0422\u0438\u043f \u043b\u0430\u043c\u043f\u044b", "VALUE": null},
        "ACODE14900": {"NAME": "\u0422\u0438\u043f \u043e\u0431\u043b\u043e\u0436\u043a\u0438", "VALUE": null},
        "ACODE15000": {"NAME": "\u0422\u0438\u043f \u043f\u0430\u043f\u043a\u0438", "VALUE": null},
        "ACODE15100": {
            "NAME": "\u0422\u0438\u043f \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438",
            "VALUE": null
        },
        "ACODE15200": {"NAME": "\u0422\u0438\u043f \u0440\u0443\u0447\u043a\u0438", "VALUE": null},
        "ACODE15300": {
            "NAME": "\u0422\u0438\u043f \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430",
            "VALUE": null
        },
        "ACODE15400": {"NAME": "\u0422\u0438\u043f \u0446\u043e\u043a\u043e\u043b\u044f", "VALUE": null},
        "ACODE15500": {"NAME": "\u0422\u0438\u043f \u0447\u0435\u0440\u043d\u0438\u043b", "VALUE": null},
        "ACODE15600": {
            "NAME": "\u0422\u0438\u043f \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043b\u0438\u0442\u0430",
            "VALUE": null
        },
        "ACODE15700": {"NAME": "\u0422\u0438\u043f\u043e\u0440\u0430\u0437\u043c\u0435\u0440", "VALUE": null},
        "ACODE15800": {"NAME": "\u0422\u043e\u043b\u0449\u0438\u043d\u0430", "VALUE": null},
        "ACODE15900": {
            "NAME": "\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u0433\u0440\u0438\u0444\u0435\u043b\u044f",
            "VALUE": null
        },
        "ACODE16000": {
            "NAME": "\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u043a\u043e\u0440\u0435\u0448\u043a\u0430",
            "VALUE": null
        },
        "ACODE16100": {
            "NAME": "\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u043f\u0438\u0441\u044c\u043c\u0430",
            "VALUE": null
        },
        "ACODE16200": {
            "NAME": "\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u0430",
            "VALUE": null
        },
        "ACODE16300": {
            "NAME": "\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u043f\u043b\u0435\u043d\u043a\u0438",
            "VALUE": null
        },
        "ACODE16400": {"NAME": "\u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435", "VALUE": null},
        "ACODE16500": {"NAME": "\u0423\u0433\u043e\u043b", "VALUE": null},
        "ACODE16600": {"NAME": "\u0423\u043f\u0430\u043a\u043e\u0432\u043a\u0430", "VALUE": null},
        "ACODE16700": {
            "NAME": "\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0441\u0435\u043a\u0440\u0435\u0442\u043d\u043e\u0441\u0442\u0438",
            "VALUE": null
        },
        "ACODE16800": {"NAME": "\u0424\u0430\u043a\u0442\u0443\u0440\u0430", "VALUE": null},
        "ACODE16900": {"NAME": "\u0424\u043b\u0438\u0441", "VALUE": null},
        "ACODE17000": {"NAME": "\u0424\u043e\u0440\u043c\u0430", "VALUE": null},
        "ACODE17100": {
            "NAME": "\u0424\u043e\u0440\u043c\u0430 \u043a\u043e\u0440\u043f\u0443\u0441\u0430",
            "VALUE": null
        },
        "ACODE17200": {"NAME": "\u0424\u043e\u0440\u043c\u0430\u0442", "VALUE": "\u04103"},
        "ACODE17300": {"NAME": "\u0426\u0432\u0435\u0442", "VALUE": null},
        "ACODE17400": {"NAME": "\u0426\u0432\u0435\u0442 \u0431\u043b\u043e\u043a\u0430", "VALUE": null},
        "ACODE17500": {
            "NAME": "\u0426\u0432\u0435\u0442 \u0440\u0435\u0437\u0438\u043d\u043a\u0438",
            "VALUE": null
        },
        "ACODE17600": {"NAME": "\u0426\u0432\u0435\u0442 \u0441\u0440\u0435\u0437\u0430", "VALUE": null},
        "ACODE17700": {"NAME": "\u0426\u0432\u0435\u0442 \u0447\u0435\u0440\u043d\u0438\u043b", "VALUE": null},
        "ACODE17800": {"NAME": "\u0426\u043e\u043a\u043e\u043b\u044c", "VALUE": null},
        "ACODE17900": {"NAME": "\u0428\u0438\u0440\u0438\u043d\u0430", "VALUE": null},
        "ACODE18000": {
            "NAME": "\u0428\u0438\u0440\u0438\u043d\u0430 \u043a\u043e\u0440\u0435\u0448\u043a\u0430",
            "VALUE": null
        },
        "ACODE18100": {
            "NAME": "\u0428\u0438\u0440\u0438\u043d\u0430 \u043b\u0435\u0437\u0432\u0438\u044f",
            "VALUE": null
        },
        "ACODE18200": {
            "NAME": "\u0428\u0438\u0440\u0438\u043d\u0430 \u043b\u0435\u043d\u0442\u044b",
            "VALUE": null
        },
        "ACODE18300": {
            "NAME": "\u0428\u0438\u0440\u0438\u043d\u0430 \u0440\u0443\u043b\u043e\u043d\u0430",
            "VALUE": null
        },
        "ACODE18400": {"NAME": "\u042d\u0444\u0444\u0435\u043a\u0442\u044b", "VALUE": null},
        "ACODE18500": {"NAME": "\u042f\u0437\u044b\u043a", "VALUE": null},
        "ACODE18600": {"NAME": "\u042f\u0440\u043a\u043e\u0441\u0442\u044c ISO", "VALUE": null},
        "ACODE18700": {
            "NAME": "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c",
            "VALUE": "\u041b\u0438\u043b\u0438\u044f \u0425\u043e\u043b\u0434\u0438\u043d\u0433"
        },
        "ACODE18800": {
            "NAME": "\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0424\u0430\u0440\u043c",
            "VALUE": null
        },
        "ACODE18900": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0448\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u043b\u0438\u0441\u0442\u043e\u0432",
            "VALUE": null
        },
        "ACODE19000": {
            "NAME": "\u0422\u0438\u043f\u043e\u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u043a\u043e\u0431",
            "VALUE": null
        },
        "ACODE19100": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0444\u043e\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u043b\u0438\u0441\u0442\u043e\u0432",
            "VALUE": null
        },
        "ACODE19200": {
            "NAME": "\u041a\u0440\u0430\u0442\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043a\u0430\u0437\u0430",
            "VALUE": null
        },
        "ACODE19300": {"NAME": "\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440", "VALUE": null},
        "ACODE19400": {
            "NAME": "\u041e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043a\u0438\u0441\u0442\u043e\u0447\u043a\u0438",
            "VALUE": null
        },
        "ACODE19500": {
            "NAME": "\u0426\u0432\u0435\u0442\u043e\u0432\u043e\u0439 \u043f\u0438\u0433\u043c\u0435\u043d\u0442",
            "VALUE": null
        },
        "ACODE19600": {"NAME": "\u041c\u0430\u0433\u043d\u0438\u0442", "VALUE": null},
        "ACODE19700": {
            "NAME": "\u0420\u0435\u043b\u044c\u0435\u0444\u043d\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE19800": {"NAME": "\u0421\u0435\u0440\u0438\u044f", "VALUE": "\"\u0421\u0430\u0448\u0430\""},
        "ACODE19900": {
            "NAME": "\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c",
            "VALUE": null
        },
        "ACODE20000": {
            "NAME": "\u0426\u0432\u0435\u0442 \u043e\u0431\u043b\u043e\u0436\u043a\u0438",
            "VALUE": null
        },
        "ACODE20100": {"NAME": "\u041f\u0440\u0435\u0434\u043c\u0435\u0442", "VALUE": null},
        "ACODE20300": {"NAME": "\u0421\u0442\u043e\u043a", "VALUE": null},
        "ACODE20400": {"NAME": "\u0410\u043a\u0446\u0438\u044f \u041a\u043e\u0440\u043f", "VALUE": null},
        "ACODE20500": {
            "NAME": "\u0426\u0432\u0435\u0442 \u043a\u043e\u0440\u043f\u0443\u0441\u0430",
            "VALUE": null
        },
        "ACODE20600": {
            "NAME": "\u0420\u0430\u0441\u043f\u0440\u043e\u0434\u0430\u0436\u0430 \u041a\u043e\u0440\u043f",
            "VALUE": null
        },
        "ACODE20700": {"NAME": "\u041c\u0430\u0441\u0448\u0442\u0430\u0431", "VALUE": null},
        "ACODE20800": {
            "NAME": "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c",
            "VALUE": null
        },
        "ACODE20900": {"NAME": "\u0422\u0438\u0441\u043d\u0435\u043d\u0438\u0435", "VALUE": null},
        "ACODE21000": {"NAME": "\u0421\u0435\u0447\u0435\u043d\u0438\u0435", "VALUE": null},
        "ACODE21100": {"NAME": "\u041e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f", "VALUE": null},
        "ACODE21200": {
            "NAME": "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u044f",
            "VALUE": null
        },
        "ACODE21300": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043c\u0435\u0442\u0430\u043b\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0443\u0433\u043e\u043b\u043a\u043e\u0432",
            "VALUE": null
        },
        "ACODE21400": {
            "NAME": "\u0420\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u0436\u0438\u043c\u0430",
            "VALUE": null
        },
        "ACODE21500": {
            "NAME": "\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0440\u0443\u0447\u0435\u043a",
            "VALUE": null
        },
        "ACODE21600": {"NAME": "\u0413\u043e\u0434", "VALUE": null},
        "ACODE21700": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u043b\u043e\u043a\u043e\u0432",
            "VALUE": null
        },
        "ACODE21800": {
            "NAME": "\u0414\u043b\u0438\u043d\u0430 \u043d\u0430\u043c\u043e\u0442\u043a\u0438",
            "VALUE": null
        },
        "ACODE21900": {
            "NAME": "\u0428\u0438\u0440\u0438\u043d\u0430 \u0431\u0430\u0433\u0435\u0442\u0430",
            "VALUE": null
        },
        "ACODE22000": {"NAME": "\u041d\u043e\u043c\u0438\u043d\u0430\u043b", "VALUE": null},
        "ACODE22100": {
            "NAME": "\u0422\u0438\u043f \u043e\u0441\u043d\u0430\u0441\u0442\u043a\u0438",
            "VALUE": null
        },
        "ACODE22200": {
            "NAME": "\u0414\u0438\u0430\u043c\u0435\u0442\u0440 \u0432\u0442\u0443\u043b\u043a\u0438",
            "VALUE": null
        },
        "ACODE22300": {
            "NAME": "\u0414\u0438\u0430\u043c\u0435\u0442\u0440 \u0440\u0443\u043b\u043e\u043d\u0430",
            "VALUE": null
        },
        "ACODE22400": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0430 \u043b\u0438\u0441\u0442\u0435",
            "VALUE": null
        },
        "ACODE22500": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044d\u0442\u0438\u043a\u0435\u0442\u043e\u043a \u0432 \u0440\u0443\u043b\u043e\u043d\u0435",
            "VALUE": null
        },
        "ACODE22600": {
            "NAME": "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",
            "VALUE": null
        },
        "ACODE22700": {
            "NAME": "\u0420\u0430\u0437\u043c\u0435\u0440 \u0441\u0442\u0440\u043e\u043a\u0438",
            "VALUE": null
        },
        "ACODE22800": {
            "NAME": "\u0420\u0430\u0437\u043c\u0435\u0440 \u043e\u0442\u0442\u0438\u0441\u043a\u0430",
            "VALUE": null
        },
        "ACODE22900": {"NAME": "\u0422\u0435\u043a\u0441\u0442\u0443\u0440\u0430", "VALUE": null},
        "ACODE23000": {
            "NAME": "\u0412\u044b\u0441\u043e\u0442\u0430 \u0432 \u0441\u043e\u0431\u0440\u0430\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435",
            "VALUE": null
        }
    }
}];

export default new Vuex.Store({
    state: {
        items: (DEBUG) ? items : [],
        isLoad: false,
        checkedItems: false,
        progress: {
            run: false,
            status: "",
            step: 0
        }
    },
    getters: {
        getItemByID: (state) => (id) => {
            return state.items.find(el => el.ID === id)
        },
        getNotDelayItem: (state) => {
            return state.items.filter(el => {
                return el.DELAY == "N"
            })
        },
        getDelayItem: (state) => {
            return state.items.filter(el => {
                return el.DELAY != "N"
            })
        }
    },
    mutations: {
        init(state, data) {
            state.checkedItems = false;
            state.items = data;
        },
        isLoad(state, data) {
            state.isLoad = data;
        },
        updateCheck(state, data){
            state.items = state.items.map((el) =>{
                if (el.ID == data) {
                    el.CHECKED = !(el.CHECKED === true)
                    state.checkedItems = false
                }
                return el;
            })
        },
        checkedAll(state, data){
            state.checkedItems = data;
        },
        progress(state, data){
            state.progress = data;
        }
    },
    actions: {
        init({commit}, isLoad = true) {
            if (isLoad) commit('isLoad', true)
            axios.get(GET_BASKET).then((msg) => {
                console.log(msg)
                commit('init', msg.data)
                commit('isLoad', false)
            }).catch((er) => {
                console.log(er)
            })
        },
        async deleteElement({commit}, id) {

            await axios.get(DELETE_BASKET_ELEMENT, {params: {"id": id}}).then((msg) => {
                console.log(msg)
                if (!msg.data.errore) {
                    commit('init', this.state.items.filter(el => {
                        return el.ID != id
                    }))
                } else {
                    Message.error({
                        message: "Ошибка изменения товара, пожалуйста проверьте соединение с интернетом"
                    });
                }
            }).catch((er) => {
                console.log(er)
            })

        },
        async deleteCheckedElement({dispatch, commit}, delay) {
            let temp = this.state.items.filter((el) => {
                return el.DELAY == delay && el.CHECKED === true
            })
            commit('progress', {
                run: true,
                status: "",
                step: 0
            })
            for(let i = 0; i < temp.length; i++){
                await dispatch('deleteElement', temp[i].ID)
                commit('progress', {
                    run: true,
                    status: "",
                    step: parseInt((i+1)/temp.length*100)
                })
            }
            setTimeout(() => {
                commit('progress', {
                    run: false,
                    status: "",
                    step: 0
                })
            }, 1000)

        },
        mdelayElement({commit}, params) {
            let id = params.id;
            let delay = params.delay;
            axios.get((delay === "Y") ?
                DELAY_BASKET_ELEMENT : UNDELAY_BASKET_ELEMENT,
                {params: {"id": id}}).then((msg) => {
                if (!msg.data.errore) {
                    commit('init', this.state.items.map(el => {
                        el.DELAY = (el.ID == id) ? delay : el.DELAY
                        return el
                    }))
                    Message.success({
                        message: "Товар успешно " +
                        ((delay !== "Y") ? "перенесен в корзину"
                            : "отложен")
                    });
                } else {
                    console.log(msg.data.erroreMessage)
                    Message.error({
                        message: "Ошибка изменения товара, пожалуйста проверьте соединение с интернетом"
                    });
                }
            }).catch((er) => {
                console.log(er)
            })
        },
        delayElement({dispatch}, id) {
            dispatch('mdelayElement', {
                id: id,
                delay: "Y"
            })
        },
        undelayElement({dispatch}, id) {
            dispatch('mdelayElement', {
                id: id,
                delay: "N"
            })
        },
        updateCount({commit}, params) {
            let id = params.id;
            let count = params.count;
            axios.get(UPDATE_COUNT_BASKET_ELEMENT, {
                params: {
                    "id": id,
                    "count": count
                }
            }).then((msg) => {
                console.log(msg.data.errore + ' ' + msg.data.erroreMessage)
                if (!msg.data.errore) {
                    if (count <= 0) {
                        commit('init', this.state.items.filter(el => {
                            return el.ID != id
                        }))
                    } else {
                        commit('init', this.state.items.map(el => {
                            console.log(count)
                            el.QUANTITY = (el.ID == id) ? count : el.QUANTITY
                            return el
                        }))
                    }
                } else {
                    console.log(msg.data.erroreMessage)
                    Message.error({
                        message: "Ошибка изменения товара, пожалуйста проверьте соединение с интернетом"
                    });
                }
            }).catch((er) => {
                console.log(er)
            })
        },
        updateCheckAll({commit}, delay){
            commit('init', this.state.items.map((el) =>{
                    if (el.DELAY == delay)
                        el.CHECKED = !this.state.checkedItems == true;
                    return el;
                })
            )
            commit('checkedAll', !this.state.checkedItems == true)
        },
        async addByCode({commit, dispatch}, params){
            await axios.get(ADD_TO_BASKET_BY_CODE, {
                params: {
                    "code": params.code,
                    "count": params.count
                }
            }).then((msg) => {
                Message.success({
                    message: "Товар успешно добавлен в корзину"
                });
            }).catch((er) => {
                console.log(er)
            })

            dispatch('init', false)

        }
    }
})
;