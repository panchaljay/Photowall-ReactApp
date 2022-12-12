import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
function Photowall(props) {
    return (
        <div>
            <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/AddPhoto">
                <i class="addIcon fa-duotone fa-plus"></i>
            </Link>
            <div className="photoGride" >
                {props.posts
                    .sort(function (x, y) {
                        return y.id - x.id
                    })
                    .map((post, index) => <Photo key={index} post={post} {...props} index={index} />)}
            </div>
        </div>
    )

}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,

}

export default Photowall