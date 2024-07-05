import React from "react";
import img from '../assets/1.png';



const Products = () => {
    return <div className="my-8" id="product">
        <div className="px-4 lg:px-14 md:w-11/12 mx-auto  flex flex-col md:flex-row justify-between items-center gap-12">
                <div>
                    <img src={img} alt="about-img" />
                </div>
                <div className="md:w-3/5 mx-auto">
                    <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
                        The unseen of spending three years at Pixelgrade</h2>
                    <p className="md:w-3/4 text-sm text-neutralGrey mb-8">Lorem ipsum dolor
                        sit amet
                        consectetur adipisicing elit. Ab ullam
                        rerum, omnis, iure vitae, necessitatibus
                        tempora nostrum hic quam nihil cumque. Ad
                        autem ab eaque perspiciatis voluptatibus,
                        debitis consequuntur in.</p>
                    <button className="btn-primary">Learn More <span className="text-red-500">{' (don\'t forget to update this component)'}</span></button>
                </div>
            </div>

    </div>


};

export default Products;
