/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {Component} from "react";
import {
    IconApps,
    IconDoorExit
} from "@tabler/icons-react";
import Dashboard from '../../pages/Dashboard/Dashboard'
import Menu from '../../pages/Menu/Menu'
import Table from '../../pages/Table/Table'
import { IconHome } from "@tabler/icons-react";
import { IconTable } from "@tabler/icons-react";

export default class Sidebar extends Component {
    state = {
        menus: [],
        tables: []
    }

    handleLogout = () => {
        if (!confirm("Apakah yakin ingin logout?")) return;
        this.props.handleAuthentication(false);
    };

    render() {
        const { navigateTo } = this.props

        return (
            <div
                className={"bg-primary text-white p-4 shadow"}
                style={{ width: 300, minHeight: "100dvh" }}
            >
                <div className="font-logo text-center mb-5">
                    <h2 className="fs-4">
                        <i>
                            <b>Warung</b> Bahari
                        </i>
                    </h2>
                    <h2 className="fs-6 my-4 font-primary fw-bold">Wmboffice</h2>
                </div>
                <nav>
                    <ul className="d-flex flex-column gap-3 nav-list list-unstyled">
                        <p className="fw-bold mb-0">Manajemen Warung</p>
                        <li className="cursor-pointer text-white ms-4" onClick={() => navigateTo(<Dashboard />)}>
                            <i className="me-3">
                                <IconHome />
                            </i>
                            <span>Dashboard</span>
                        </li>
                        <li className="cursor-pointer text-white ms-4" onClick={() => navigateTo(<Menu menus={this.state.menus} />)}>
                            <i className="me-3">
                                <IconApps />
                            </i>
                            <span>Menus</span>
                        </li>
                        <li className="cursor-pointer text-white ms-4" onClick={() => navigateTo(<Table tables={this.state.tables} />)}>
                            <i className="me-3">
                                <IconTable />
                            </i>
                            <span>Tables</span>
                        </li>
                        <hr />
                        <li
                            onClick={this.handleLogout}
                            className="cursor-pointer text-white"
                        >
                            <i className="me-3">
                                <IconDoorExit />
                            </i>
                            <span>Logout</span>
                        </li>
                    </ul>
                </nav>
            </div>
        );

    }
}