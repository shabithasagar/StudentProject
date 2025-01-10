import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBarComponent = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>


            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <Link to={'/getstudent'}><Button color="inherit" style={{ color: "white" }}>Students</Button></Link>
                    <Link to={'/poststudent'}><Button color="inherit" style={{ color: "white" }}>Add Student</Button></Link>
                    <Link to={'/getcourse'}><Button color="inherit" style={{ color: "white" }}>Courses</Button></Link>
                    <Link to={'/postcourse'}><Button color="inherit" style={{ color: "white" }}>Add Course</Button></Link>
                    <Link to={'/postEnrollment'}><Button color="inherit" style={{ color: "white" }}>Add Enrollment</Button></Link>
                </Toolbar>
            </AppBar>


        </Box>
    )
}

export default NavBarComponent
