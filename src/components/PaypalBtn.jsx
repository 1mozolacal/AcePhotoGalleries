const PaypalBtn = ({}) => {
    return (
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="A5WUADFYUNFH8" />
            <table>
                <tr><td><input type="hidden" name="on0" value="Sizes (inches)" />Sizes (inches)</td></tr><tr><td><select name="os0">
                    <option value="8X10">8X10 $150.00 CAD</option>
                    <option value="11X14">11X14 $225.00 CAD</option>
                    <option value="16X20">16X20 $295.00 CAD</option>
                    <option value="20X24">20X24 $350.00 CAD</option>
                    <option value="20X30">20X30 $415.00 CAD</option>
                </select> </td></tr>
            </table>
            <input type="hidden" name="currency_code" value="CAD" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
    );
}

export default PaypalBtn;
