import React from 'react'

const sizes = [
    "8X10",
    "11X14",
    "16X20",
    "20X24",
    "20X30"
]

const PaypalBtn = ({ value, prices = [] }) => {
    return (
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value={value} />
            <table>
                <tr>
                    <td>
                        <input type="hidden" name="on0" value="Sizes (inches)" />
                        Sizes (inches)
                    </td>
                </tr>
                <tr>
                    <td>
                        <select name="os0">
                            {
                                prices.length > 0 ?
                                    prices.map((val, i) => <option key={i} value={sizes[i]}>
                                        {sizes[i]} {val} CAD
                                    </option>)
                                    : null
                            }
                        </select>
                    </td>
                </tr>
            </table>
            <input type="hidden" name="currency_code" value="CAD" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
    );
}

export default PaypalBtn;
