export function fileOpen(cb = null, options = {}) {
  var input = document.createElement('input');
  input.type = 'file';

  if (options.accept) {
    input.accept = options.accept;
  }

  input.onchange = async function (e) {
    const file = e.target.files[0];

    if (options.returnType === 'file') {
      cb(file);
    }
    else if (options.returnType === 'dataurl') {
      // fileToDataurl(file, (dataurl) => cb(file, dataurl));
      const dataurl = await fileToDataurl(file);
      cb(file, dataurl);
    }
    else {
      cb(file);
    }
  }

  input.click();
}

export function fileToDataurl(file) {
  return new Promise((resolve) => {
    let reader = new FileReader();

    reader.onload = (e) => {
        resolve(e.target.result);
    };

    reader.readAsDataURL(file);
  })
}