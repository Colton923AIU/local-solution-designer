# Options for yo @pnp/spfX [OPTIONS]

## [OPTIONS] with [VARIABLES]

--component-description [variable<string>]
--component-name [variable<string>]
--solution-name [variable<string>]

## Mandatory [OPTIONS]

--skip-install
--component-type webpart
--environment spo
--package-manager npm

# Example useage

```
app.get('/some-endpoint', (request, response)=>{
    // in general when executing commands on behalf of the server
    // accept stdin & a file
    // output stdout, stderr, and an error to the server logs
    const {stdin} = request.params;

    /*
        Here is the true point to this block of code
    */

    const execution_string = 'yo @pnp/spfX'
        + `--skip-install
           --component-type webpart
           --environment spo
           --package-manager npm`
        + `component-description`
        + stdin.componentDescription
        + `component-description`
        + stdin.componentName
        + `solution-name`
        + stdin.solutionName


    exec(execution_string, (error, stderr, stdout)=>{
        if (error) {
            // handle error
        }
        if (stderr) {
            // handle stderr
        }
        // handle response
        res.send(`created webpart ${name of endpoint parameter}`)
    })



})


```
