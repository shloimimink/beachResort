import React, {Component} from 'react';
import {FaCocktail, FaHiking, FaSpaceShuttle, FaBeer} from "react-icons/fa";
import Title from "./Title";


class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "Free Cocktail",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, possimus!"
            }, {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, possimus!"
            }, {
                icon: <FaSpaceShuttle/>,
                title: "Free shuttle",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, possimus!"
            }, {
                icon: <FaBeer/>,
                title: "Strongest Beer",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, possimus!"
            }
        ]
    };

    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}

export default Services;
