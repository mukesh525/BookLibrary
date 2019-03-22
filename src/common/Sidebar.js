import React from 'react';
import {Navbar,Nav,FormControl,Button,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.scss';


export function Sidebar(props){
    return  ( 
        <div id="sidebar-container" className="sidebar-expanded d-none d-md-block col-2">
         <ul className="list-group sticky-top sticky-offset">
         </ul>
         <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                <small>MAIN MENU</small>
          </li>
          <a href="#submenu1" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-dashboard fa-fw mr-3"></span>
                    <span className="menu-collapsed">Dashboard</span>
                    <span class="icon-bar"></span>
                </div>
            </a>

            <div id="submenu1" className="collapse sidebar-submenu">
                <a href="#" className="list-group-item list-group-item-action bg-dark text-white">
                    <span className="menu-collapsed">Charts</span>
                </a>
                <a href="#" className="list-group-item list-group-item-action bg-dark text-white">
                    <span className="menu-collapsed">Reports</span>
                </a>
                <a href="#" className="list-group-item list-group-item-action bg-dark text-white">
                    <span className="menu-collapsed">Tables</span>
                </a>
            </div>

            <a href="#submenu2" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-user fa-fw mr-3"></span>
                    <span className="menu-collapsed">Profile</span>
                    <span className="submenu-icon ml-auto"></span>
                </div>
            </a>

        </div>
      
     
 )};