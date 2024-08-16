import React from 'react';

function Footer() {

    return (
        <>
            <section style={{ width: "85%" }} className="m-auto ">
                <div className='d-flex justify-content-between'>
                    <h1>zomato</h1>
                    <form className='d-flex g-2 justify-content-between '>
                        <select id="country" name="country" class="form-control bg-body-secondary  border border-1 border-black  ">
                            <option value="">Select a country</option>
                            <option value="AF">Afghanistan</option>
                            <option value="AL">Albania</option>
                            <option value="Ar">Argentina</option>
                            <option value="Alr">Algeriaa</option>
                            <option value="Arm">Armenia</option>
                            <option value="Arm">Azerbaizan</option>
                            <option value="lnd">India</option>
                            
                        </select>
                        <select id="country" name="country" class="form-control border border-1 border-black bg-primary text-white">
                            <option value="Hindi">Select Langauge</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Urd">Urdu</option>
                            <option value="Spain">Spainis</option>
                            <option value="Alr">Chinese</option>
                            <option value="Arm">English</option>
                            <option value="Arm">Azerbaizan</option>
                            <option value="lnd">India</option>
                            
                        </select>

                    </form>


                </div>
            </section>

        </>
    )
}


export default Footer