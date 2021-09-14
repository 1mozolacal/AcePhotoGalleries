import React from "react";

import InfoCard from "../components/InfoCard";

// Material ui
import Grid from "@material-ui/core/Grid";
import Grow from '@material-ui/core/Grow'


const CardHolder = ({items,viewImageCallBack}) => (
    <Grid
        container
        spacing={2}
        justifyContent="center"
    >
        {items.map((x, index) => { //(id,title,width,minPrice,maxPrice,imageRef,paybutton)
            return (<Grid
                item
                key={x[0]}
                xs={12}
                md={x[2]}
            >
                <Grow
                    in={true}
                    {...{ timeout: (index % 10) * 300 }}>
                    <div>
                        <InfoCard
                            id={x[0]}
                            name={x[1]}
                            minPrice={x[3]}
                            maxPrice={x[4]}
                            image={x[5]}
                            paypal={x[6]}
                            viewCallBack={viewImageCallBack}
                        />
                    </div>
                </Grow>
            </Grid>)
        })}
    </Grid>)

export default CardHolder;