const SentryCli = require('@sentry/cli');

async function createNewRelease(release) {
    const cli = new SentryCli();
    await cli.releases.new(release);
}

async function uploadSourceMaps(release) {
    const cli = new SentryCli();
    await cli.releases.uploadSourceMaps(release, {
        include: ['node_modules/@talend/management-console/dist'],
      });
}

async function deleteRelease(release) {

}
createNewRelease('tmc@0.0.1');
uploadSourceMaps('tmc@1.38.2')


