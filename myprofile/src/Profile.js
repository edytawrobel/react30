import React from 'react';

function Profile(props) {
  return (
    <div className="Profile">
      <h1 className="Name">{props.person.name}</h1>
      {/* <p className="Bio">{props.person.about}</p> */}
      <div className="Quote">
        <blockquote>&ldquo; {props.quote.content} &rdquo;</blockquote>
        <div className="byline">&mdash; {props.quote.source}</div>
      </div>
    </div>
  )
}

export default Profile;
