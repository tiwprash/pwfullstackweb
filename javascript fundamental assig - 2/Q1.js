let username = ["Mithun","Prashant","Rohit","Rahul","Goku","Vegita","Naruto"];


  function isUserPresent(user) {
    if (username.includes(user)) {
      console.log(`Yes, ${user} is a valid user.`);
      return true;
    } else {
      console.log(`No, ${user} is not a valid user.`);
      return true;
    }
  }

isUserPresent("Freeza")