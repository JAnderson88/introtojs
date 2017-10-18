var user = {
    name: 'Jeremy Anderson',
    companyName: 'TechLaunch.io',
    address: '8400 NW 36th St #450, Doral, FL 33166',
    email: 'janderson@techlaunch.io',
    picture: 'techlaunch_at_fvi_vertical_dark_bg.png'
}

document.querySelector('.name').textContent = user.name;
document.querySelector('.company_name').textContent = user.companyName;
document.querySelector('.address').textContent = user.address;
document.querySelector('.email').textContent = user.email;
