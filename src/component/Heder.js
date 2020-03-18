import React, { Component } from 'react';

export class Heder extends Component {
    render() {
        return (
            <div className="heder-top">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">فروشگاه کتاب</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">خانه <span className="sr-only">(جاری)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">امکانات</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">قیمت‌گذاری</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">درباره</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="جست‌وجو" />
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">جست‌وجو</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Heder;
