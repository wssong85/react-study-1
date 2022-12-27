import React from 'react';

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  commentText: {
    color: "black",
    fontSize: 16
  },
};


const Avartar = (props) => {
  return (
    <div style={styles.imageContainer}>
      {/*<img src={props.user.avartarUrl} alt={props.user.name} style={styles.wrapper}/>*/}
      <img src={"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} style={styles.image}/>
    </div>

  )
}

const UserInfo = (props) => {

  return (
    <div style={styles.wrapper}>
      <Avartar user={props.user}/>

      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.user.name}</span>
        <span style={styles.commentText}>{props.user.content}</span>
        {/*{props.user.name}*/}
      </div>
    </div>
  );
}

const Comment = (props) => {

  return (
    <div>
      <UserInfo user={props.author}/>

      <div>
        {props.text}
      </div>

      <div>
        {props.date}
      </div>

    </div>
  );
};

export default Comment;