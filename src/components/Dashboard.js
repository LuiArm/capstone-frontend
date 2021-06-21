import React from 'react'
import dashboard from './Dashboard.css'



export default function Dashboard () {
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <div className="main__greeting">
                        <h1>Hello</h1> 
                        <p>Welcome to your admin dashboard</p>
                    </div>
                </div>

                <div className="main__cards">

                    <div className="d-card">
                        <i className = "fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of cards</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>

                    <div className="d-card">
                        <i className="fa fa-calendar fa-2x"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">number of decks</p>
                            <span className="font-bold text-title">2467</span>
                        </div>
                    </div>

                    <div className="d-card">
                        <i className="fa fa-video-camera fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of cards left</p>
                            <span className="font-bold text-title">340</span>
                        </div>
                    </div>

                    <div className="d-card">
                        <i className="fa fa-thumbs-up fa-2x text-green"></i>
                        <div className="card_inner">
                             <p className="text-primary-p">Number</p>
                             <span className="font-bold text-title">645</span>
                        </div>
                    </div>

                </div>

                <div className="charts">
                    <div className="charts-left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Study Report</h1>
                                <p>Daily</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                    </div>


                </div>
            </div> 
        </main>
       
    )
}