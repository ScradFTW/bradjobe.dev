export default (className) => {
    const dom = document.getElementsByClassName(className)[0];

    dom.scrollIntoView({
        behavior: 'smooth',
    });
};
