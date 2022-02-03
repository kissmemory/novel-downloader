import { _GM_deleteValue, _GM_getValue, _GM_setValue } from "./lib/GM";

export const retryLimit = 5;
export const enableDebug = {
  value: false,
};
export const enableCustomFinishCallback = true;
export const enableCustomChapterFilter = true;
export const enableCustomSaveOptions = true;
export const enableJjwxcRemoteFont = true;
export const enableSaveToArchiveOrg = true;

export const iconStart0 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAFYElEQVR4nO2dIUxkORyHP4XD4E6RYNZgUGvWonAnVqxDbbJiNWLNOsQ65Oo1CMQIFAnJJiQIcgY7YhIEbgTJiEkm4USPuyNh3pv2tf33tb9f8kl4fe3H0Pm37xXi50/gHJgBC+C5YB6Bv4AL4CuwH7872skBcI/9oA5lBpwAO1F7p/IcUf5fuy8L4AzYjthPVWYfeMJ+wFLxABxG660K8xv7QcrBWawOqykfsB+YnEzQv4RXOcV+UHJzD+zF6LwaMsF+QCyYo3kBALfYD4YVK+DL8C4cd+6wHwhrfgJbQztyrJEAjhvgj4F9OcrUKMA33Me778/NaLCUXKMA27ivt48BP7vArYU0k1oFAPeRHjrJPQ3u0ZGlZgHATe5+Bv6ecxooGtUuwEuOCVvsugd2vXp0ZGlFAHDL3bOA3zfHzSmqTEsCgNsjcBXwO5e4T5Hq0poA4OYFoWsg1RWNWhTgJZ8ImxdcUdFuo5YFADcvmAZcY0olRaPWBQD313wZcJ0n3Fa6UUcC/JfvAdda4TagjjYS4HWOcF/7fK/5i5FODmvcDzC0eveOsO3xt4xwRVECvJ1t3MMmvtd+AN5HuH62SIDunOC/tLxgREUjCdCf0HnBKFYUJcBm2SNsXnCZqD3RIgE2zzZuidi3PVPcxLLISAD/fMYtDvm0qdht6BIgLIf4zwuWOHmKigQIzy5hhbSiKocSYFi2cFVA3zZ+ytjGztQogMVS7Vf85gVPFLLVrEYBrGbcvlvRJzbNfJ0aBbDc1++7Fd28bFyjAOdRe8g/PlvOfhm18d/UKMCKMjZqHNM/L1hiXCmsUYBn3ILMZ+zX6N/jVgi72mr6KFqtArzwiJtsneE+li3oezLJdNGodgHGgOm3AQlgz03vKCWMBLDnrneUEkYC2CMBGkcCNI4EaBwJ0DgSYEMecE/mbkLIA59NCnCzplElEbqfLvTJXwlQGEN2z+zjv4GzKQFK/xewZPiCTumS6xOgg4cI9xiyZ08CFIIESBwJYI8E6EACJI4EsEcCdCABEkcC2CMBOpAAiSMB7JEAHUiAxJEA9kiADiRA4kgAeyRABxIgcSSAPRKgAwmQOBLAHgnQgQRIHAlgjwToQAIkjgSwRwJ0IAESRwLYYyrA7zWNKgUJkDgSwB4J0IEESBwJYE8zAqxwr0T7webv2Ivxbv2PHtc7xb1qNucDpc0I8DHTPcXIB/yPi5MAHcT4KM+dXH3ThADzXDcUMSHHxEmADr5kuqcYOSJfvzQjwIKCz8/7X3bof8O3BAjkDvtXuPcl5HBICeDB9yx3FpZj8vdHcwKsKOCsnDeyhzvNSwJkYEp5hypfY9MXTQrwjDtJo5ScYNcPzQrwTBmHOx1g+y7BpgV4xJ21Z5Ut8hV8JMAaLpPf5fqcdbRLAmTE4lj1wwHtlQCRyV0l3MHvnF8JkIGcVcLc1T4JsCE5qoQW1T4JsCGpq4RW1b5iBbhe0yhLUlYJS7xfCfAGKaqE3wq4LwngQcxTta2rfRIggDlxqoQlVPskQCAxqoQlVPskwACG7CUspdonAQYQWiUsqdonAQYSUiUsqdonASLgUyUsrdonASKwwj2y1ZcSq30SIBKbVAlLK29LgMh0VQlLrfZJgMi89aRxydU+CRCZOe5g6JfsMo6TwiVARJbABe7r3pgmfRJASAAhAQQSQCABmsdUgKs1jRL5uO0dpYSRAPZMekcpYS7WNErk47R3lBLmx5pGiXyYvi1lDFumaua6f4jS5w77jmiRBa/XM8zyjnHX0sfIkrjPPQzOAeNdTRsbUzbb2ZQ9W7i9dBNghltyjUHrny4r3JtHJ//0b9RH4P8GSxsCzEN/51YAAAAASUVORK5CYII=";
export const iconStart1 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAESElEQVR4nO2cLUxcQRSFv4QgEBiSKgQCh6pCouvQlbVVdaRuTFUNoqaqEkktCoVD4HBITBMMosmaVsxu+kL3l3lv7p13z5ccyc68OSf3sLtvHwghhBBCjJM/hRKNowAERwEIjgIQHAUgOApAcBSA4CgAwVEAgqMABEcBCI4CEBwFIDgKQHAUgOAoAMFRAIKjAARHAQiOAhAcBSA4CkBwFIDgKADBUQCCowAERwEIjgIQHAUgOApAcBSA4CgAzkmUm9SqUvHpjYSEvRky35iEvSky35iEvTky35iEvUky35iEvVky35iEvWky35iEvXky35iEvYky35iEvZky35iEvaky35iEvbky35iEvcky35iEvdky35iEveky35iEzA9PQuaHJyHzm2e78O8T7Zhfeq2j4i1wDvyi/GAT/s1P5Gs9J197SN4An4A7hjlgz+a/fM078lm8KXxt92wDp8BPYEL9g/ZoflcT8tmcMrKK6I54TwfueS/NV8SyEe/54D3uoZmK2GTEt2KA5dov5bYiXjvivRthsea6Mq+Ivka8V0NqrlWqahUx1IjfRGeF15DWWCMVrnG2xhpDaLCKqDHiV+ka+ADs9nA9ack6qYfX3yXv9XrJOkOruCIsRvxLPZANOXztRSwhzVkvDbDO4fR1H+asV0trV4SHEf8M/ABOVm22B1Jn3VRhvRPytT1jc7YLK8LTiN/Z/FyLSNT/Vm8HZxVhtYnZiD8oOc3GOcC+Iqou9gx8p86Ib40T8tnUrogqi1wB76k/4ltkh3xWVzQegHvgM7Df6/HEYp98hvc0EoAn8hg7HuAwonNMPtsnnAVggkZ8TboV0cfb9aIRf4ZGvCX7ZA9KKmLjEf8NjXiPHJO92bQiFICRUCUAqgBfVK+AedI/gXVx80/goorQ28BhcPs2cFlF6IOgMpr7IGiRVBHrM5qPguep5vf9rWF1v0DVxbrS18EBvw5epGv6u+fPOx7uGXQXgJnGXBHWt4Q1EYCuhrwptBYebgptNgBd3dBORcxG/A325zaaAMz0G7gA3gFbaxpSgy3yni7Ie7Q+p9EGoKtH4AtwtNqfwTia7uER+/MIF4CuboCPwN5Su/phb7pWKyM+RABmGqoiWh7xoQLQ1SPwlbKKOJq+RssjPmwAurpl/YqYjfhbB/tWAHrWBLjk/9/HzX4XeYnd7yIVgMqa/T7O+neR1jLfgKQASIYy34CkAEiGcvGACKmu5j5DKPJboQha9BZ4Lh4eEiX1o+LnCKoi2tMgTxJVRfjWRiO+FFWEH5k/TVwVUV/mD4ueh4cHTY5ZVUd8KaqI/mQ+4ktRRWwulyO+FFXEcjU14ktRRfxT8yO+lIgVMcoRX8rYP2gKNeJLGVNFhB/xpbRYERrxA+C9IjTiK+KpIjTijbGoCI14hwxdERrxDdFnRWjEN85rKkIjfoSsqgiN+EB0K0IjXgghhBDh+Avri3imoU6g/AAAAABJRU5ErkJggg==";
export const iconSetting =
  "data:image/png;base64,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";
export const iconJump =
  "data:image/png;base64,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";

export async function getCustomEnableSaveToArchiveOrg() {
  const keyName = "novel-downloader-enableSaveToArchiveOrg";
  const value = (await _GM_getValue(keyName)) as string | undefined;
  if (value === undefined) {
    const v = confirm(
      `欢迎使用小说下载器脚本！
本脚本为404小说文库项目的组成部分之一。404小说文库项目致力于存档、保存、恢复因种种原因被删除的网络小说。
您是否同意将当前书页存档至互联网档案馆（archive.org），以备日后（被删除后）查看？

如您同意，小说下载器脚本将会发送当前书籍详情页URL及目录页URL（如果存在）至存档服务后端。
该过程将会搜集并上报您如下信息：IP地址、User-Agent、Referer、当前书籍详情页URL、当前书籍目录页URL（如果存在）、当前小说下载器脚本版本、当前脚本管理器版本。
除上述信息外，不会搜集您任何其他信息。

本存档功能为主体功能以外的附加功能，同意与否并不影响小说下载功能的正常使用。`
    );
    await _GM_setValue(keyName, JSON.stringify(v));
    return v;
  } else {
    try {
      const v = JSON.parse(value);
      if (typeof v !== "boolean") {
        // noinspection ExceptionCaughtLocallyJS
        throw new Error("value is not boolean");
      }
      return v;
    } catch (error) {
      await _GM_deleteValue(keyName);
      return false;
    }
  }
}
