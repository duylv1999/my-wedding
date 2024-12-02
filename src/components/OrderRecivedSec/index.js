import React from 'react'
import {Link} from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import './style.scss'

const OrderRecivedSec = ({cartList}) => {

    let totalPrice = 0;
    if (cartList && cartList.length > 0) {
        for (let i = 1; i <= cartList.length; i++) {
        totalPrice += Number(cartList[i-1].price);
        }
    }

    return(
        <section className="cart-recived-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="order-top">
                        <h2>Thank You For Your Order! <span>your order has been recived</span></h2>
                        <Link to='/home' className="theme-btn-s4">Back Home</Link>
                    </div>
                    <Grid className="cartStatus">
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Grid className="cartTotals">
                                        <h4>Order details</h4>
                                        <Table>
                                            <TableBody>
                                                {cartList.map(item => (
                                                    <TableRow key={item.id}>
                                                        <TableCell><img src={item.proImg} alt="" /> {item.title} x 1</TableCell>
                                                        <TableCell
                                                            align="right">${1 * item.price}</TableCell>
                                                    </TableRow>
                                                ))}
                                                <TableRow className="totalProduct">
                                                    <TableCell>Total product</TableCell>
                                                    <TableCell align="right">{cartList.length}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Sub Price</TableCell>
                                                    <TableCell align="right">${totalPrice}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell><b>Total Price</b></TableCell>
                                                    <TableCell
                                                        align="right"><b>${totalPrice}</b></TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                </div>
            </div>
        </section>
    )
}

export default OrderRecivedSec;