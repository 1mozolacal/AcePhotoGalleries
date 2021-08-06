import React, { useState } from "react";

import InfoCard from "../components/InfoCard";
import SideBar from "../components/Sidebar";

// Material ui
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Info } from "@material-ui/icons";
//import { PayPalButton } from "react-paypal-button-v2";

const buttonDictionary ={
"beachfront restaurant in mexican riviera" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="JSW7NWPW662DJ"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $150.00 CAD</option>
	<option value="11X14">11X14 $225.00 CAD</option>
	<option value="16X20">16X20 $295.00 CAD</option>
	<option value="20X24">20X24 $350.00 CAD</option>
	<option value="20X30">20X30 $415.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"gorgeous cenote on the gulf of mexico" : 
(
  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_s-xclick"/>
  <input type="hidden" name="hosted_button_id" value="N2973YMXK7YU8"/>
  <table>
  <tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
    <option value="8X10">8X10 $180.00 CAD</option>
    <option value="11X14">11X14 $250.00 CAD</option>
    <option value="16X20">16X20 $315.00 CAD</option>
    <option value="20X24">20X24 $375.00 CAD</option>
    <option value="20X30">20X30 $435.00 CAD</option>
  </select> </td></tr>
  </table>
  <input type="hidden" name="currency_code" value="CAD"/>
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
  </form>
  ),
"mexican oasis and gardens" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="YF8HF5BDPV43Q"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $165.00 CAD</option>
	<option value="11X14">11X14 $235.00 CAD</option>
	<option value="16X20">16X20 $305.00 CAD</option>
	<option value="20X24">20X24 $360.00 CAD</option>
	<option value="20X30">20X30 $425.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"street view of times square in ny city" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="RR9J3TX5CBRG4"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $200.00 CAD</option>
	<option value="11X14">11X14 $275.00 CAD</option>
	<option value="16X20">16X20 $350.00 CAD</option>
	<option value="20X24">20X24 $405.00 CAD</option>
	<option value="20X30">20X30 $475.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"paris france s underground catacombs" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="8BD3Z7GUU7S44"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $135.00 CAD</option>
	<option value="11X14">11X14 $195.00 CAD</option>
	<option value="16X20">16X20 $250.00 CAD</option>
	<option value="20X24">20X24 $315.00 CAD</option>
	<option value="20X30">20X30 $385.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"leviathan at versailles" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="3DJB6D8P8KXD4"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $165.00 CAD</option>
	<option value="11X14">11X14 $235.00 CAD</option>
	<option value="16X20">16X20 $305.00 CAD</option>
	<option value="20X24">20X24 $360.00 CAD</option>
	<option value="20X30">20X30 $425.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"majestic ceiling of louvre museum" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="BAY78W4PUJRJA"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $170.00 CAD</option>
	<option value="11X14">11X14 $245.00 CAD</option>
	<option value="16X20">16X20 $310.00 CAD</option>
	<option value="20X24">20X24 $370.00 CAD</option>
	<option value="20X30">20X30 $425.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"paris france boulevard" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="PUDGDLS6QVY8G"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $175.00 CAD</option>
	<option value="11X14">11X14 $255.00 CAD</option>
	<option value="16X20">16X20 $315.00 CAD</option>
	<option value="20X24">20X24 $375.00 CAD</option>
	<option value="20X30">20X30 $435.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"french capitol building" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="GSGK76XCBWA9L"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $165.00 CAD</option>
	<option value="11X14">11X14 $235.00 CAD</option>
	<option value="16X20">16X20 $305.00 CAD</option>
	<option value="20X24">20X24 $360.00 CAD</option>
	<option value="20X30">20X30 $425.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"the famous moulin rouge" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="PCQSVKLK3H6DE"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $195.00 CAD</option>
	<option value="11X14">11X14 $265.00 CAD</option>
	<option value="16X20">16X20 $345.00 CAD</option>
	<option value="20X24">20X24 $395.00 CAD</option>
	<option value="20X30">20X30 $475.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"louis the 14th statue in paris france" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="ZMXTGZ5XNQ3SQ"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $165.00 CAD</option>
	<option value="11X14">11X14 $235.00 CAD</option>
	<option value="16X20">16X20 $305.00 CAD</option>
	<option value="20X24">20X24 $360.00 CAD</option>
	<option value="20X30">20X30 $425.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"giant willow tree" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="7XDZQ5NQWFABS"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $135.00 CAD</option>
	<option value="11X14">11X14 $195.00 CAD</option>
	<option value="16X20">16X20 $250.00 CAD</option>
	<option value="20X24">20X24 $315.00 CAD</option>
	<option value="20X30">20X30 $385.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"willow tree in waiting" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="D9Z3TFX9HNZCN"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $135.00 CAD</option>
	<option value="11X14">11X14 $195.00 CAD</option>
	<option value="16X20">16X20 $250.00 CAD</option>
	<option value="20X24">20X24 $315.00 CAD</option>
	<option value="20X30">20X30 $385.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"rocky shoreline of bruce peninsula" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="CXS4FJVXS2GAU"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $170.00 CAD</option>
	<option value="11X14">11X14 $245.00 CAD</option>
	<option value="16X20">16X20 $310.00 CAD</option>
	<option value="20X24">20X24 $370.00 CAD</option>
	<option value="20X30">20X30 $425.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"trout pond in bruce peninsula national park" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="P7VQM4W8EATX8"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $150.00 CAD</option>
	<option value="11X14">11X14 $225.00 CAD</option>
	<option value="16X20">16X20 $295.00 CAD</option>
	<option value="20X24">20X24 $350.00 CAD</option>
	<option value="20X30">20X30 $415.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"trickling stream in bruce peninsula park" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="AAWRQDA2RG9LJ"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $150.00 CAD</option>
	<option value="11X14">11X14 $225.00 CAD</option>
	<option value="16X20">16X20 $295.00 CAD</option>
	<option value="20X24">20X24 $350.00 CAD</option>
	<option value="20X30">20X30 $415.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"trout river at singing sands beach" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="FCHBHXS8AY4LQ"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $150.00 CAD</option>
	<option value="11X14">11X14 $225.00 CAD</option>
	<option value="16X20">16X20 $295.00 CAD</option>
	<option value="20X24">20X24 $350.00 CAD</option>
	<option value="20X30">20X30 $415.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"old log dump side of the grotto" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="HGXHU5T3EY8LW"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $215.00 CAD</option>
	<option value="11X14">11X14 $285.00 CAD</option>
	<option value="16X20">16X20 $375.00 CAD</option>
	<option value="20X24">20X24 $425.00 CAD</option>
	<option value="20X30">20X30 $500.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"estuary at singing sands beach" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="HJQ77XE3DQB24"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $170.00 CAD</option>
	<option value="11X14">11X14 $245.00 CAD</option>
	<option value="16X20">16X20 $310.00 CAD</option>
	<option value="20X24">20X24 $370.00 CAD</option>
	<option value="20X30">20X30 $425.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"the grotto" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="L2QESBLZVKURW"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $205.00 CAD</option>
	<option value="11X14">11X14 $280.00 CAD</option>
	<option value="16X20">16X20 $360.00 CAD</option>
	<option value="20X24">20X24 $415.00 CAD</option>
	<option value="20X30">20X30 $485.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"the eiffel tower lit at night in paris france" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="ZR2DE3WW2P5DG"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $250.00 CAD</option>
	<option value="11X14">11X14 $300.00 CAD</option>
	<option value="16X20">16X20 $375.00 CAD</option>
	<option value="20X24">20X24 $445.00 CAD</option>
	<option value="20X30">20X30 $545.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"la louvre museum painted art ceiling" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="DPRMH4ZHKT3RQ"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $200.00 CAD</option>
	<option value="11X14">11X14 $275.00 CAD</option>
	<option value="16X20">16X20 $350.00 CAD</option>
	<option value="20X24">20X24 $405.00 CAD</option>
	<option value="20X30">20X30 $475.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"under the base of the famous eiffel tower in paris" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="XA4SE88JP35DY"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $200.00 CAD</option>
	<option value="11X14">11X14 $260.00 CAD</option>
	<option value="16X20">16X20 $340.00 CAD</option>
	<option value="20X24">20X24 $400.00 CAD</option>
	<option value="20X30">20X30 $460.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"chinese river flowing under a bridge" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="BYDQR5RYXZY9W"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $150.00 CAD</option>
	<option value="11X14">11X14 $225.00 CAD</option>
	<option value="16X20">16X20 $295.00 CAD</option>
	<option value="20X24">20X24 $350.00 CAD</option>
	<option value="20X30">20X30 $415.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"pagoda plantation in beijing china" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="Y3YDPRDA86HSE"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $170.00 CAD</option>
	<option value="11X14">11X14 $245.00 CAD</option>
	<option value="16X20">16X20 $310.00 CAD</option>
	<option value="20X24">20X24 $370.00 CAD</option>
	<option value="20X30">20X30 $425.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"rain dripping off a giant granite rock face" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="RYPFSJRTLT5VN"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $150.00 CAD</option>
	<option value="11X14">11X14 $225.00 CAD</option>
	<option value="16X20">16X20 $295.00 CAD</option>
	<option value="20X24">20X24 $350.00 CAD</option>
	<option value="20X30">20X30 $415.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"biodome a la montreal" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="5E34S4Z2T66SU"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $135.00 CAD</option>
	<option value="11X14">11X14 $195.00 CAD</option>
	<option value="16X20">16X20 $250.00 CAD</option>
	<option value="20X24">20X24 $315.00 CAD</option>
	<option value="20X30">20X30 $385.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"extraordinary stained glass in house of commons" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="CJ77YWBMMNSA8"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $170.00 CAD</option>
	<option value="11X14">11X14 $245.00 CAD</option>
	<option value="16X20">16X20 $310.00 CAD</option>
	<option value="20X24">20X24 $370.00 CAD</option>
	<option value="20X30">20X30 $425.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"canadian house of commons historic architecture" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="W22YTB2GMSF2G"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $170.00 CAD</option>
	<option value="11X14">11X14 $245.00 CAD</option>
	<option value="16X20">16X20 $310.00 CAD</option>
	<option value="20X24">20X24 $370.00 CAD</option>
	<option value="20X30">20X30 $425.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"agave and cactus field" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="RF3J6HMZY4UZC"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $150.00 CAD</option>
	<option value="11X14">11X14 $225.00 CAD</option>
	<option value="16X20">16X20 $295.00 CAD</option>
	<option value="20X24">20X24 $350.00 CAD</option>
	<option value="20X30">20X30 $415.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"golden gates entrance to palais royale" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="JBP9UQWY2RE4C"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $135.00 CAD</option>
	<option value="11X14">11X14 $195.00 CAD</option>
	<option value="16X20">16X20 $250.00 CAD</option>
	<option value="20X24">20X24 $315.00 CAD</option>
	<option value="20X30">20X30 $385.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"arc de triomphe" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="T3JH6J5XTGVSU"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $200.00 CAD</option>
	<option value="11X14">11X14 $275.00 CAD</option>
	<option value="16X20">16X20 $350.00 CAD</option>
	<option value="20X24">20X24 $405.00 CAD</option>
	<option value="20X30">20X30 $475.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
//"me and my youngest son" : '',
"9 kay street heritage" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="29BULPRJPR3C6"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $135.00 CAD</option>
	<option value="11X14">11X14 $195.00 CAD</option>
	<option value="16X20">16X20 $250.00 CAD</option>
	<option value="20X24">20X24 $315.00 CAD</option>
	<option value="20X30">20X30 $385.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"awfully odd sign in downtown paris" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="65NXV343WCC58"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $150.00 CAD</option>
	<option value="11X14">11X14 $225.00 CAD</option>
	<option value="16X20">16X20 $295.00 CAD</option>
	<option value="20X24">20X24 $350.00 CAD</option>
	<option value="20X30">20X30 $415.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"times square ny city" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="8ULJUNQ75X28L"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $250.00 CAD</option>
	<option value="11X14">11X14 $300.00 CAD</option>
	<option value="16X20">16X20 $375.00 CAD</option>
	<option value="20X24">20X24 $445.00 CAD</option>
	<option value="20X30">20X30 $545.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"central park in autumn" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="YLCKY9CTSQZF6"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $170.00 CAD</option>
	<option value="11X14">11X14 $245.00 CAD</option>
	<option value="16X20">16X20 $310.00 CAD</option>
	<option value="20X24">20X24 $370.00 CAD</option>
	<option value="20X30">20X30 $425.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"mayan tiki huts" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="8WEGEGS24H4BJ"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $165.00 CAD</option>
	<option value="11X14">11X14 $235.00 CAD</option>
	<option value="16X20">16X20 $305.00 CAD</option>
	<option value="20X24">20X24 $360.00 CAD</option>
	<option value="20X30">20X30 $425.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"new york subway" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="WHG3F5U6LAUGJ"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $210.00 CAD</option>
	<option value="11X14">11X14 $285.00 CAD</option>
	<option value="16X20">16X20 $365.00 CAD</option>
	<option value="20X24">20X24 $415.00 CAD</option>
	<option value="20X30">20X30 $495.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"lone seagull" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="VFRQG692PMUG2"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $135.00 CAD</option>
	<option value="11X14">11X14 $195.00 CAD</option>
	<option value="16X20">16X20 $250.00 CAD</option>
	<option value="20X24">20X24 $315.00 CAD</option>
	<option value="20X30">20X30 $385.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"b w of underbelly of ambassdor bridge" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="AGSK4TPV3UVJC"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $170.00 CAD</option>
	<option value="11X14">11X14 $245.00 CAD</option>
	<option value="16X20">16X20 $310.00 CAD</option>
	<option value="20X24">20X24 $370.00 CAD</option>
	<option value="20X30">20X30 $425.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"view from below the bridge" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="5JJ3KQGW72YJN"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $150.00 CAD</option>
	<option value="11X14">11X14 $225.00 CAD</option>
	<option value="16X20">16X20 $295.00 CAD</option>
	<option value="20X24">20X24 $350.00 CAD</option>
	<option value="20X30">20X30 $415.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"ocean freighter under the ambassador bridge" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="PQA5PDYHNBC2C"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $150.00 CAD</option>
	<option value="11X14">11X14 $225.00 CAD</option>
	<option value="16X20">16X20 $295.00 CAD</option>
	<option value="20X24">20X24 $350.00 CAD</option>
	<option value="20X30">20X30 $415.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
//"ocean freighter under the ambassador bridge" : '',
"hiram walkers head office building" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="CQJRRZ5RJVK6J"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $165.00 CAD</option>
	<option value="11X14">11X14 $235.00 CAD</option>
	<option value="16X20">16X20 $305.00 CAD</option>
	<option value="20X24">20X24 $360.00 CAD</option>
	<option value="20X30">20X30 $425.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"busiest international bridge crossing" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="Z435YGQ65SXJ6"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $150.00 CAD</option>
	<option value="11X14">11X14 $225.00 CAD</option>
	<option value="16X20">16X20 $295.00 CAD</option>
	<option value="20X24">20X24 $350.00 CAD</option>
	<option value="20X30">20X30 $415.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"ambassador bridge" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="GLEDRUFYSFH5U"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $150.00 CAD</option>
	<option value="11X14">11X14 $225.00 CAD</option>
	<option value="16X20">16X20 $295.00 CAD</option>
	<option value="20X24">20X24 $350.00 CAD</option>
	<option value="20X30">20X30 $415.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"remarkable colored sun" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="S28K5KK7F3YLY"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $135.00 CAD</option>
	<option value="11X14">11X14 $195.00 CAD</option>
	<option value="16X20">16X20 $250.00 CAD</option>
	<option value="20X24">20X24 $315.00 CAD</option>
	<option value="20X30">20X30 $385.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"resort spa ceiling" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="YTPT38JZXJ8JC"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $150.00 CAD</option>
	<option value="11X14">11X14 $225.00 CAD</option>
	<option value="16X20">16X20 $295.00 CAD</option>
	<option value="20X24">20X24 $350.00 CAD</option>
	<option value="20X30">20X30 $415.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"remnants of destroyed mill" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="LKTYVTG9L23HS"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $150.00 CAD</option>
	<option value="11X14">11X14 $225.00 CAD</option>
	<option value="16X20">16X20 $295.00 CAD</option>
	<option value="20X24">20X24 $350.00 CAD</option>
	<option value="20X30">20X30 $415.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"view along the river" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="KC27KKCVG5HWW"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $135.00 CAD</option>
	<option value="11X14">11X14 $195.00 CAD</option>
	<option value="16X20">16X20 $250.00 CAD</option>
	<option value="20X24">20X24 $315.00 CAD</option>
	<option value="20X30">20X30 $385.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"river rapids" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="AG5T5JBGBQBWY"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $135.00 CAD</option>
	<option value="11X14">11X14 $195.00 CAD</option>
	<option value="16X20">16X20 $250.00 CAD</option>
	<option value="20X24">20X24 $315.00 CAD</option>
	<option value="20X30">20X30 $385.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"old fishing camp on the river" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="Z2F9M9BZXSHRW"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $165.00 CAD</option>
	<option value="11X14">11X14 $235.00 CAD</option>
	<option value="16X20">16X20 $305.00 CAD</option>
	<option value="20X24">20X24 $360.00 CAD</option>
	<option value="20X30">20X30 $425.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"lazy river" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="NJLP2UY4G65RG"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $135.00 CAD</option>
	<option value="11X14">11X14 $195.00 CAD</option>
	<option value="16X20">16X20 $250.00 CAD</option>
	<option value="20X24">20X24 $315.00 CAD</option>
	<option value="20X30">20X30 $385.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"fallen tree in the lake" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="TVCYKY5KDX9V8"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $165.00 CAD</option>
	<option value="11X14">11X14 $235.00 CAD</option>
	<option value="16X20">16X20 $305.00 CAD</option>
	<option value="20X24">20X24 $360.00 CAD</option>
	<option value="20X30">20X30 $425.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"canadian geese waddling" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="QEDJ45C5DRQEE"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $110.00 CAD</option>
	<option value="11X14">11X14 $150.00 CAD</option>
	<option value="16X20">16X20 $195.00 CAD</option>
	<option value="20X24">20X24 $235.00 CAD</option>
	<option value="20X30">20X30 $285.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"canadian geese" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="3MFMDSQHP373S"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $110.00 CAD</option>
	<option value="11X14">11X14 $150.00 CAD</option>
	<option value="16X20">16X20 $195.00 CAD</option>
	<option value="20X24">20X24 $235.00 CAD</option>
	<option value="20X30">20X30 $285.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"centuries old highschool" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="5GHRADEYJHQ3W"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $135.00 CAD</option>
	<option value="11X14">11X14 $195.00 CAD</option>
	<option value="16X20">16X20 $250.00 CAD</option>
	<option value="20X24">20X24 $315.00 CAD</option>
	<option value="20X30">20X30 $385.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
//"centuries old highschool" : '',
"abandoned mansion old spa" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="5SE3S6ANVAKDU"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $135.00 CAD</option>
	<option value="11X14">11X14 $195.00 CAD</option>
	<option value="16X20">16X20 $250.00 CAD</option>
	<option value="20X24">20X24 $315.00 CAD</option>
	<option value="20X30">20X30 $385.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"sunrise in agawa" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="E9VRNTKW9VWHE"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $135.00 CAD</option>
	<option value="11X14">11X14 $195.00 CAD</option>
	<option value="16X20">16X20 $250.00 CAD</option>
	<option value="20X24">20X24 $315.00 CAD</option>
	<option value="20X30">20X30 $385.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
//"sunrise in agawa" : '',
"agawa mountainside waterfall" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="4PLMCJSR5JQGW"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $165.00 CAD</option>
	<option value="11X14">11X14 $240.00 CAD</option>
	<option value="16X20">16X20 $300.00 CAD</option>
	<option value="20X24">20X24 $365.00 CAD</option>
	<option value="20X30">20X30 $405.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"agawa waterfall with special filter" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="34KMHDVP2C9GJ"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $165.00 CAD</option>
	<option value="11X14">11X14 $240.00 CAD</option>
	<option value="16X20">16X20 $300.00 CAD</option>
	<option value="20X24">20X24 $365.00 CAD</option>
	<option value="20X30">20X30 $405.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"mercury filter truck approaching sunset" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="9GXSKGW7NQFHE"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $135.00 CAD</option>
	<option value="11X14">11X14 $195.00 CAD</option>
	<option value="16X20">16X20 $250.00 CAD</option>
	<option value="20X24">20X24 $315.00 CAD</option>
	<option value="20X30">20X30 $385.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"walking trail deep in the forest" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="KDZ972RY7ZASG"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $150.00 CAD</option>
	<option value="11X14">11X14 $225.00 CAD</option>
	<option value="16X20">16X20 $295.00 CAD</option>
	<option value="20X24">20X24 $350.00 CAD</option>
	<option value="20X30">20X30 $415.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"black and white river view" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="GKZUL7F924XAA"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $165.00 CAD</option>
	<option value="11X14">11X14 $235.00 CAD</option>
	<option value="16X20">16X20 $305.00 CAD</option>
	<option value="20X24">20X24 $360.00 CAD</option>
	<option value="20X30">20X30 $425.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"merry christmas tree" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="H4QBE752L3R4U"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $135.00 CAD</option>
	<option value="11X14">11X14 $195.00 CAD</option>
	<option value="16X20">16X20 $250.00 CAD</option>
	<option value="20X24">20X24 $315.00 CAD</option>
	<option value="20X30">20X30 $385.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"trail along the shore" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="7DERQUBBMMLE2"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $170.00 CAD</option>
	<option value="11X14">11X14 $245.00 CAD</option>
	<option value="16X20">16X20 $310.00 CAD</option>
	<option value="20X24">20X24 $370.00 CAD</option>
	<option value="20X30">20X30 $425.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"mill destroyed on the grand" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="K4646AXB3V3Q2"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $165.00 CAD</option>
	<option value="11X14">11X14 $235.00 CAD</option>
	<option value="16X20">16X20 $305.00 CAD</option>
	<option value="20X24">20X24 $360.00 CAD</option>
	<option value="20X30">20X30 $425.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"rail tracks" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="7VK4RJHLKHUUE"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $135.00 CAD</option>
	<option value="11X14">11X14 $195.00 CAD</option>
	<option value="16X20">16X20 $250.00 CAD</option>
	<option value="20X24">20X24 $315.00 CAD</option>
	<option value="20X30">20X30 $385.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"sunset" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="HPE2J6RWQ7WFE"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $150.00 CAD</option>
	<option value="11X14">11X14 $225.00 CAD</option>
	<option value="16X20">16X20 $295.00 CAD</option>
	<option value="20X24">20X24 $350.00 CAD</option>
	<option value="20X30">20X30 $415.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"long shot of rail bridge" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="ALFU4NFDHB5VU"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $180.00 CAD</option>
	<option value="11X14">11X14 $250.00 CAD</option>
	<option value="16X20">16X20 $315.00 CAD</option>
	<option value="20X24">20X24 $375.00 CAD</option>
	<option value="20X30">20X30 $435.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"beautiful yellow flowers" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="QTMSU65XNKHSW"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $110.00 CAD</option>
	<option value="11X14">11X14 $150.00 CAD</option>
	<option value="16X20">16X20 $195.00 CAD</option>
	<option value="20X24">20X24 $235.00 CAD</option>
	<option value="20X30">20X30 $285.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"wooden bridge along water" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="KGKZ7T6YX95XU"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $200.00 CAD</option>
	<option value="11X14">11X14 $275.00 CAD</option>
	<option value="16X20">16X20 $350.00 CAD</option>
	<option value="20X24">20X24 $405.00 CAD</option>
	<option value="20X30">20X30 $475.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"rail bridge with train" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="7EQL47EYLF5B8"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $210.00 CAD</option>
	<option value="11X14">11X14 $285.00 CAD</option>
	<option value="16X20">16X20 $365.00 CAD</option>
	<option value="20X24">20X24 $415.00 CAD</option>
	<option value="20X30">20X30 $495.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"picturesque river through the trees" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="K5NCB8EAG96P2"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $180.00 CAD</option>
	<option value="11X14">11X14 $250.00 CAD</option>
	<option value="16X20">16X20 $315.00 CAD</option>
	<option value="20X24">20X24 $375.00 CAD</option>
	<option value="20X30">20X30 $435.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"rustic barn" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="NYPM6QJ4NZPTA"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $170.00 CAD</option>
	<option value="11X14">11X14 $245.00 CAD</option>
	<option value="16X20">16X20 $310.00 CAD</option>
	<option value="20X24">20X24 $370.00 CAD</option>
	<option value="20X30">20X30 $425.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"mill destroyed" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="6F6HRHCJR3E9J"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $165.00 CAD</option>
	<option value="11X14">11X14 $235.00 CAD</option>
	<option value="16X20">16X20 $305.00 CAD</option>
	<option value="20X24">20X24 $360.00 CAD</option>
	<option value="20X30">20X30 $425.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"winter wonderland" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="WJET2EDTYQA7Y"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $165.00 CAD</option>
	<option value="11X14">11X14 $235.00 CAD</option>
	<option value="16X20">16X20 $305.00 CAD</option>
	<option value="20X24">20X24 $360.00 CAD</option>
	<option value="20X30">20X30 $425.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"canada moose in lights" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="A5HGCZ3AGWNML"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $135.00 CAD</option>
	<option value="11X14">11X14 $195.00 CAD</option>
	<option value="16X20">16X20 $250.00 CAD</option>
	<option value="20X24">20X24 $315.00 CAD</option>
	<option value="20X30">20X30 $385.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"rail bridge and water lock" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="A5WUADFYUNFH8"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $150.00 CAD</option>
	<option value="11X14">11X14 $225.00 CAD</option>
	<option value="16X20">16X20 $295.00 CAD</option>
	<option value="20X24">20X24 $350.00 CAD</option>
	<option value="20X30">20X30 $415.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
"light tunnel" : 
(<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="EE6HGZV5F39U8"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)"/>Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 $170.00 CAD</option>
	<option value="11X14">11X14 $245.00 CAD</option>
	<option value="16X20">16X20 $310.00 CAD</option>
	<option value="20X24">20X24 $370.00 CAD</option>
	<option value="20X30">20X30 $425.00 CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
),
}

// (id,title,price,width,imageRef)

const displaySettings = [
	[1,"Bacon Pancake",20,6,undefined],
	[2,"Bacon Pancake",20,6,undefined],
]

const Gallery = () => {
	const [imageCount,setImageCount] = useState(1)
	const [currentDisplay,setCurrentDisplay] = useState(displaySettings.slice(0,imageCount))
  return (
    <>
      <SideBar activeTab={2} />

      <div
        className="lg-text bold-text cyan-text"
        style={{ width: "100%", textAlign: "center" }}
      >
        Gallery
      </div>
      <br />
	  <Grid
          container
          spacing={4}
          justify="center"
          style={{ padding: "10px 20px" }}
        >
			{ currentDisplay.map((x) => {
				return (<Grid
					item
					key={x[0]}
					xs={12}
					md={x[3]}
				>
					<InfoCard 
					image={x[4]} 
					name={x[1]} 
					price={x[2]}
					/>
				</Grid>)
		})}
		</Grid>
      <br />
      <Grid container justify="center">
        <Grid item xs={12} md={6}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#D6FFF6", width: "100%" }}
			onClick={() => {
				let newImageCount = imageCount + 10
				setImageCount(newImageCount)
				setCurrentDisplay(displaySettings.slice(0,newImageCount))
			}}
          >
            Load more
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Gallery;



