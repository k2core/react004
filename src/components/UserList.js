function UserList({ item }) {
  return (
    <div
      className="col-sm-12 d-flex justify-content-center"
      style={{ marginBottom: "15px" }}
    >
      <div className="card" style={{ width: "30rem" }}>
        <h5 className="card-header">User: {item.login.username}</h5>
        <div>
          <div>
            <div>
              <h4>
                {item.name.title} {item.name.first} {item.name.last}
              </h4>
              <p>Email: {item.email}</p>
            </div>
            <div>
              <img src={item.picture.medium}></img>
            </div>
          </div>
          <div>
            <div>
              <h5>
                User for {item.registered.age}{" "}
                {item.registered.age === 1 ? "year" : " years"}
              </h5>
              <p>Age: {item.dob.age}</p>
              <p>Nationality: {item.nat}</p>
              <p>Phone : {item.phone}</p>
            </div>
            <div className="col text-right">
              <h6 className="card-text mb-0">Address:</h6>
              <p className="card-text mb-0">
                <small>
                  {item.location.street.number} {item.location.street.name},
                </small>
              </p>
              <p className="card-text mb-0 text-wrap">
                <small>
                  {item.location.state}, {item.location.country},
                </small>
              </p>
              <p className="card-text mb-0">
                <small>{item.location.postcode}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserList;
