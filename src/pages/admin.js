import React from "react";
import Button from '@material-ui/core/Button';
import "../stylesheets/home.sass"
import { Grid } from "@material-ui/core";
import AdminNavbar from "../components/AdminNavbar";
// import watermarkLogo from '../images/waterMark.png'
// import mergeImages from 'merge-images';

const Admin = () => {
    
    return (
        <>
        <AdminNavbar/>
            <h1>Admin page</h1>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
            >
                <Grid item>
                    <Row buttonText='Go to tuner' buttonLink='/tuner' title='Tunner Page' desc="The tuner page is for modify already uploaded pictures. Like editing title or it's position in the gallery."></Row>
                </Grid>
                <Grid item>
                    <Row buttonText='Go to uploader' buttonLink='/uploads' title='Uploader Page' desc='The uploader is for uploading new picture.'></Row>
                </Grid>
                <Grid item>
                    <Row buttonText='Go to editor' buttonLink='/editor' title='Editor Page' desc='The editor is for make edits to existing uploaded item. Everything but the "PaypalID" can be changed).'></Row>
                </Grid>
                <Grid item>
                    <Row buttonText='LEGACY uploader' buttonLink='/uploadsold' title='**LEGACY** Uploader' desc='OLD uploader page, only use this if the newer uploader is casuing issues.'></Row>
                </Grid>
                <Grid item></Grid>
            </Grid>

        </>)
}

const Row = ({buttonText, buttonLink, title, desc}) => {
    return (
        <div style={{marginBottom:"3em"}}>
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
        >
            <Grid item>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                >
                    <h2>{title}</h2>
                    <Button variant="contained" className="grid-button" href={buttonLink}>{buttonText}</Button>
                </Grid>
            </Grid>
            <Grid item style={{width:"30vw"}}>{desc}</Grid>
        </Grid>
        </div>
    )
}

export default Admin;