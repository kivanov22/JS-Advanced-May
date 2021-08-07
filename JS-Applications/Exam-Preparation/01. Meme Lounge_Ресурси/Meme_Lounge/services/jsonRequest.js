
export async function request(url, method,body,responseResult) {//responseResult
    //if there is no method given , the default is Get
    if (method === undefined) {
        method = 'Get';
    }
    //if the method is post,put there is headers
    let headers = {};
    if (['post', 'put', 'patch'].includes(method.toLowerCase())) {
        headers['Content-Type'] = 'application/json';
    }

    const token = localStorage.getItem('authToken');

    if (token!=null) {//token token !=null
        headers['X-Authorization'] = token;
    }

    let options = {
        headers,
        method
    };
   
    if (body !== undefined) {
        options.body = JSON.stringify(body);
    }

    let response = await fetch(url, options);
    if (response.ok==false) {//==false
        let msg = await response.text();//msg
        throw new Error(`${response.status}: ${response.statusText}\n${msg}`);
    }

    let result = undefined;
    if (!responseResult) {
        result = await response.json();
    }

    return result;
}