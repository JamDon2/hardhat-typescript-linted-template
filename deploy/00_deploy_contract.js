module.exports = async (hre) => {
    const { deploy } = hre.deployments;

    const { deployer } = await hre.getNamedAccounts();
    await deploy("Lock", {
        from: deployer,
        args: [],
        log: true,
    });
};
module.exports.tags = ["Lock"];
