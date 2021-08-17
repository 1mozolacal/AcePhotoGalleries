import React from 'react'
// import TextField from '@material-ui/core/TextField';

const sizes = [
    "8X10",
    "11X14",
    "16X20",
    "20X24",
    "20X30"
]

const materials = [
    "Poster",
    "Acrylic",
    "Metal",
    "Stretched Canvas"
]

const PaypalBtn = ({ paypalID, prices = [] }) => {
    return (
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value={paypalID} />


            <label htmlFor="sizes">Sizes (inches)</label>
            <input id="sizes" type="hidden" name="on0" value="Sizes (inches)" />

            <select name="os0">
            {
                prices.length > 0 ?
                    prices.map((val, i) => <option key={i} value={sizes[i]}>
                        {sizes[i]} {val} CAD
                    </option>)
                    : null
            }
            </select>
            {/* Styling might be changed */}

            {/* <TextField
                id="outlined-select-currency-native"
                select
                label="Native select"
                SelectProps={{
                    native: true,
                }}
                helperText="Please select your preferred Size (inches)"
                variant="outlined"
                name="os0"
            >
                {
                prices.length > 0 ?
                    prices.map((val, i) => <option key={i} value={sizes[i]}>
                        {sizes[i]} {val} CAD
                    </option>)
                    : null
                }
            </TextField> */}

            {/* <label htmlFor="print-type">Print type</label> */}
            <input type="hidden" id="print-type" name="on1" value="Print type" />
            <select name="os1">
                {
                    materials.length > 0 ?
                        materials.map((val, i) => <option key={i} value={val}>
                            {val}
                        </option>)
                        : null
                }
            </select>

            <input type="hidden" name="currency_code" value="CAD" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
    );
}

export default PaypalBtn;
