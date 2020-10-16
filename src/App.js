import React from 'react';
import './Styles/App.css';
import Matter from "matter-js";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // module aliases
        let Engine = Matter.Engine,
            Render = Matter.Render,
            World = Matter.World,
            Bodies = Matter.Bodies,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint;

        // create an engine
        let engine = Engine.create();
        engine.world.gravity.y = 0; // turn off gravity

        // create a renderer
        const render = Render.create({
            element: document.body,
            engine: engine,
            options: {
                height: window.innerHeight - 4,
                width: window.innerWidth,
                wireframes: false
            }
        });

        // create two boxes and a ground
        const boxA = Bodies.rectangle(400, 200, 80, 80);
        const boxB = Bodies.rectangle(450, 50, 80, 80);
        const ground = Bodies.rectangle(400, 610, 810, 60, {isStatic: true});

        // add all of the bodies to the world
        World.add(engine.world, [boxA, boxB, ground]);

        // adding mouse input (constraint)
        const mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
                    }
                }
            });
        World.add(engine.world, mouseConstraint);

        //creating spring constraint
        const constraint = Matter.Constraint.create({
            bodyA: boxA,
            bodyB: boxB,
            restitution: 0.97,
            length: 150,
            stiffness: 0.01
        });
        World.add(engine.world, constraint);

        var GraphNode = require("./GraphNode");

        World.add(engine.world, GraphNode);

        Engine.run(engine);
        Render.run(render);
    }

    render() {
        return <div className="App"/>;
    }
}

export default App;
