<template>
<div>
    <br><br><br> <br><br><br>   
  <table cellpadding="0" cellspacing="0" width="98%" class='table table-striped'>
    <tr>
      <td valign="top" width="370px">
        <table class='table table-striped'
          id="CoursePlanTable"
          cellpadding="0"
          cellspacing="0"
          valign="top"
        >
          <tr>
            <td>课程名称</td>
            <td>教师姓名</td>
            <td>学分</td>
          </tr>
          <tr>
            <td>Δ形势与政策(五)</td>
            <td>卢玉</td>
            <td>0.25</td>
          </tr>
          <tr>
            <td>计量经济学</td>
            <td>郭韧</td>
            <td>2</td>
          </tr>
          <tr>
            <td>经济数学模型与仿真</td>
            <td>邓晓懿</td>
            <td>2</td>
          </tr>
          <tr>
            <td>决策支持系统</td>
            <td>李朝明</td>
            <td>2</td>
          </tr>
          <tr>
            <td>市场调研与预测</td>
            <td>陈小燕 王智生</td>
            <td>2</td>
          </tr>
          <tr>
            <td>现代信息服务系统开发</td>
            <td>李向阳</td>
            <td>3</td>
          </tr>
          <tr>
            <td>专业英语</td>
            <td>邓晓懿</td>
            <td>2</td>
          </tr>
          <tr>
            <td>微观经济学</td>
            <td>郑琳琳</td>
            <td>3</td>
          </tr>
          <tr>
            <td>(#)数据挖掘</td>
            <td>李海林</td>
            <td>3.5</td>
          </tr>
          <tr>
            <td>信息系统分析与设计</td>
            <td>谭观音</td>
            <td>2.5</td>
          </tr>
          <tr>
            <td>专业实验(Ⅰ)(第1-18周)</td>
            <td>蔡林峰 陈思雄</td>
            <td>3</td>
          </tr>
        </table>
        <div id="PlanFit"></div>
      </td>
      <td valign="top">
        <table class='table table-striped'
          id="ArrangeTable"
          cellpadding="0"
          cellspacing="0"
          valign="top"
          width="100%"
        >
          <tr>
            <td class="Htitle Vtitle">星期</td>
            <td class="Htitle">上午1-2节</td>
            <td class="Htitle">上午3-4节</td>
            <td class="Htitle">中午5-6节</td>
            <td class="Htitle">下午7-8节</td>
            <td class="Htitle">下午9-10节</td>
            <td class="Htitle">晚上11-13节</td>
          </tr>
          <tr>
            <td class="Vtitle">一</td>
            <td>
              <div>2018级信息管理与信息系统1班市场调研与预测</div>
              <div>经404</div>
              <div>1-18周</div>
            </td>
            <td>
              <div>2018级信息管理与信息系统1班Δ形势与政策(五)</div>
              <div>经4-1</div>
              <div>13-14周</div>
            </td>
            <td>&nbsp;</td>
            <td>
              <div>2018级信息管理与信息系统1班微观经济学</div>
              <div>敬406(3节)</div>
              <div>1-18周</div>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td class="Vtitle">二</td>
            <td>
              <div>2018级信息管理与信息系统1班现代信息服务系统开发</div>
              <div>杭梯2-6</div>
              <div>1-18周</div>
            </td>
            <td>
              <div>2018级信息管理与信息系统1班现代信息服务系统开发</div>
              <div>(实验)</div>
              <div></div>
              <div>1-12周</div>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
              <div>2018级信息管理与信息系统1班计量经济学</div>
              <div>永205(3节)</div>
              <div>1-12周</div>
            </td>
          </tr>
          <tr>
            <td class="Vtitle">三</td>
            <td>
              <div>2018级信息管理与信息系统1班经济数学模型与仿真</div>
              <div>杭梯2-6</div>
              <div>1-18周</div>
            </td>
            <td>
              <div>2018级信息管理与信息系统1班信息系统分析与设计</div>
              <div>杭梯1-2</div>
              <div>1-18周</div>
            </td>
            <td>&nbsp;</td>
            <td>
              <div>2018级信息管理与信息系统1班专业英语</div>
              <div>经301</div>
              <div>1-18周</div>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td class="Vtitle">四</td>
            <td>&nbsp;</td>
            <td>
              <div>2018级信息管理与信息系统1班信息系统分析与设计</div>
              <div>(实验)</div>
              <div></div>
              <div>1-6周</div>
            </td>
            <td>&nbsp;</td>
            <td>
              <div>2018级信息管理与信息系统1班专业实验(Ⅰ)</div>
              <div>(实验)</div>
              <div>(3节)</div>
              <div>1-18周</div>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td class="Vtitle">五</td>
            <td>
              <div>2018级信息管理与信息系统1班(#)数据挖掘</div>
              <div>经4-1</div>
              <div>1-18周</div>
            </td>
            <td>
              <div>2018级信息管理与信息系统1班决策支持系统</div>
              <div>杭梯1-4</div>
              <div>1-18周</div>
            </td>
            <td>&nbsp;</td>
            <td>
              <div>2018级信息管理与信息系统1班(#)数据挖掘</div>
              <div>(实验)</div>
              <div></div>
              <div>1-18周</div>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td class="Vtitle">六</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td class="Vtitle">日</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </table>
        <div id="ArrangeFit"></div>
      </td>
      <td></td>
    </tr>
  </table>
</div>
</template>