import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer 2Qh96RNZSFyKNq_x1ScXcyqQ0rzq484VSh6sqlvRg_xVAXKNlGsNx--Gz1wo5z-zScdLXc9Qp6ZLUCjBPBii8rweqesuOU3mBRCjDfeatRUGugoDEths2it5xU-FXXYx'
    }

})