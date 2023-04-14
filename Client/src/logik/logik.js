import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarIcon from "@material-ui/icons/Star";

function getDistanceFromLatLonInKm(lat1, lng1, lat2, lng2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lng2 - lng1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

const setStar = (rate) => {
  var a = new Array(5);
  var i = 0;
  for (i; i < rate; i++) {
    a[i] = 1;
  }
  for (i; i < 5; i++) {
    a[i] = 0;
  }
  return a.map((elem, index) => (
    <span key={index}>
      {elem === 1 && (
        <span>
          <StarIcon />
        </span>
      )}
      {elem === 0 && (
        <span>
          <StarOutlineIcon />
        </span>
      )}
    </span>
  ));
};

const serverurl = "http://localhost:80"
export {getDistanceFromLatLonInKm,serverurl,setStar}