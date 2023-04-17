// Menentukan posisi bagian paling atas halaman web
window.scrollTo(0, 0);

// Name 
// Meminta pengguna untuk memasukkan nama mereka melalui prompt
const name = prompt('Please enter your name:');

// Mengambil elemen h1 pada halaman web
const heading = document.getElementById('nama');

// Menampilkan nama pada elemen h1
heading.innerText = `Hi ${name}, Welcome To Website`;

// object time
function getCurrentTime() {
    const now = new Date();
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = daysOfWeek[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    const hours = now.getHours() + 1; // menambahkan 1 jam untuk GMT+0100
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // mengembalikan waktu dengan format yang diinginkan
    return `${day} ${month} ${date} ${year} ${hours}:${minutes}:${seconds} GMT+0100`;
  }

  // menampilkan waktu saat ini pada elemen HTML dengan id "current-time"
  const currentTimeElement = document.getElementById("current-time");
  setInterval(() => {
    currentTimeElement.textContent = getCurrentTime();
  }, 1000);

// Validasi Message Us
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const birthdateInput = document.getElementById('birthdate');
const genderInputs = document.getElementsByName('gender');
const messageInput = document.getElementById('message');
const outputName = document.getElementById('output-name');
const outputBirthdate = document.getElementById('output-birthdate');
const outputGender = document.getElementById('output-gender');
const outputMessage = document.getElementById('output-message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // menghentikan aksi default pengiriman form

  // validasi input
  let isValid = true;

  if (nameInput.value === '') {
    setErrorFor(nameInput, 'Name cannot be blank');
    isValid = false;
  } else {
    setSuccessFor(nameInput);
  }

  if (birthdateInput.value === '') {
    setErrorFor(birthdateInput, 'Birthdate cannot be blank');
    isValid = false;
  } else {
    setSuccessFor(birthdateInput);
  }

  if (!genderInputs[0].checked && !genderInputs[1].checked) {
    setErrorFor(genderInputs[0], 'Please select a gender');
    isValid = false;
  } else {
    setSuccessFor(genderInputs[0].parentElement);
  }

  if (messageInput.value === '') {
    setErrorFor(messageInput, 'Message cannot be blank');
    isValid = false;
  } else {
    setSuccessFor(messageInput);
  }

  // jika semua input valid, tampilkan output
  if (isValid) {
    outputName.innerText = nameInput.value;
    outputBirthdate.innerText = birthdateInput.value;
    outputGender.innerText = genderInputs[0].checked ? 'Laki-Laki' : 'Perempuan';
    outputMessage.innerText = messageInput.value;
  }
});

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
