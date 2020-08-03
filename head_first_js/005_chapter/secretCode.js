const getSecret = (file, secretPassword) => {
  file.opened = file.opened + 1;
  if (secretPassword == file.password) {
    return file.contents;
  } else {
    return "Invalid password! No secret for you.";
  }
};

const setSecret = (file, secretPassword, secret) => {
    console.log(file.opened)
  if (secretPassword == file.password) {
    file.opened = 0;
    file.contents = secret;
  }
};

let superSecretFile = {
  level: "classified",
  opened: 0,
  password: 2,
  contents: "Dr. Evel's next meeting is in Detroit.",
};

// let secret = getSecret(superSecretFile, 1);
// console.log(secret);
// setSecret(superSecretFile,2,
//   "Dr. Evel's next meeting is in Philadelphia."
// );
// secret = getSecret();
// console.log(secret);
