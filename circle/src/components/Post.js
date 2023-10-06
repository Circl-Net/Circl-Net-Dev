import React from 'react';
import Username from 'Username.js'
function Post({username, text, image}){
    return (
        <>
        <div class="posts">
        <div class="post-title">
            <username />
        </div>
        <div class="post-content">
          <p class="post-text">
           {text}
          </p>
          <img
            class="post-image"
            alt=" "
            src="https://zoo.sandiegozoo.org/sites/default/files/body_side_image/Plan%20Your%20Visit-Direcions%20%26%20Parking.jpg"
          />
          <div class="reactions">
            <button>Like</button>
            <button>Share</button>
            <button>Comment</button>
            <textarea placeholder="comment"></textarea>
            <div class="post-comment-button">
              <button>Post Comment</button>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}