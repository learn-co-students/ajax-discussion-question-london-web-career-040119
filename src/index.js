const fetchData = () => fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(data => data.results[0]);

const processData = (data) => {
  const container = document.querySelector('.container');
  const name = `${data.name.title}. ${data.name.first} ${data.name.last}`
    .split(' ')
    .map(str => str.charAt(0).toUpperCase() + str.slice(1))
    .join(' ');
  const dob = new Date(data.dob.date).toDateString();
  container.querySelector('#fullname').innerHTML = name;
  container.querySelector('#email').innerHTML = data.email;
  container.querySelector('#street').innerHTML = data.location.street;
  container.querySelector('#city').innerHTML = data.location.city;
  container.querySelector('#state').innerHTML = data.location.state;
  container.querySelector('#postcode').innerHTML = data.location.postcode;
  container.querySelector('#phone').innerHTML = data.phone;
  container.querySelector('#cell').innerHTML = data.cell;
  container.querySelector('#date_of_birth').innerHTML = dob;
  container.querySelector('#profile_picture').src = data.picture.large;
  return data;
};

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.container button');

  btn.addEventListener('click', (_) => {
    fetchData()
      .then(data => processData(data));
  });
});
