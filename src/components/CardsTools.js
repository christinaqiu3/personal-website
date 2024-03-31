import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsTools() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/flowerPlug (1).mp4'
                            text='Flower generator plugin for Maya. Users can customize a flower design and generate multiple flowers on selected vertices.
                        There are settings for randomization to introduce natural looking variation between flowers.'
                            skills={['Python','Maya']}
                            label='Flower Generator Maya Plugin'
                            path='https://vimeo.com/905690072?share=copy'
                        />
                        <CardItem
                            src='images/duck tub copy.mp4'
                            text='Randomized Physics Scattering Scriptable Tool made in Unreal Engine 5.
                            Users can import their own models and generate randomly scattered objects to quickly create a natural looking scene.
                            Ducks and bathtub modeled in Blender.'
                            skills={['Unreal Engine', 'Blender']}
                            label='Physics Scattering UE5 Scriptable Tool'
                            path='https://vimeo.com/905688463?share=copy'
                        />

                    </ul>
                    <ul className='cards__items'>

                        <CardItem
                            src='images/cube3.mp4'
                            text='A mini Maya application that parses OBJ files into Half-Edge meshes,
                            allowing edge splitting, face triangulation, and smoothening via Catmull-Clark subdivision.
                            Utilizing a JSON skeleton, performs distance-based skinning for mesh deformation.' //extrusion
                            skills={['C++', 'OpenGL', 'Qt', 'GLSL']}
                            label='Half-Edge Mesh & Skinning'
                            path='https://vimeo.com/904651208?share=copy'
                        />
                        <CardItem
                            src='images/24hrAnim4.mp4'
                            text='Developed essential 3D character animation, model creation, and camera work
                            with a team of 5 to produce a 3D animation.
'skills={['Blender', 'Procreate']}
                            label='24 HOURS Animation Contest'
                            path='https://youtu.be/AQ-fSgDwUH0?si=4LZSYvHCACmTHB_g'
                        />

                    </ul>



                </div>
            </div>
        </div>
    );
}

export default CardsTools;