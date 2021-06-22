import React from 'react'
import dashboard from './Dashboard.css'
import Chart from './Chart'

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
                    
                        <div className="card_inner">
                            <p className="text-primary-p">Number of cards</p>
                            <span className="font-bold text-title">5</span>
                        </div>
                    </div>

                    <div className="d-card">
                        
                        <div className="card_inner">
                            <p className="text-primary-p">number of decks</p>
                            <span className="font-bold text-title">2</span>
                        </div>
                    </div>

                    <div className="d-card">
                        
                        <div className="card_inner">
                            <p className="text-primary-p">Number of cards left</p>
                            <span className="font-bold text-title">40</span>
                        </div>
                    </div>

                    <div className="d-card">
                       
                        <div className="card_inner">
                             <p className="text-primary-p">Subjects</p>
                             <span className="font-bold text-title">1</span>
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

                        </div>
                        <Chart />
                    </div>
                 
                </div>
            </div> 
        </main>
       
    )
}