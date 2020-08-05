
module.exports = function(sequelize, DataTypes) {
    let Operation = sequelize.define('Operation', {

       id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            field: 'id',
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        opnNo: {
            type:DataTypes.INTEGER(20),
            field:'opn_no',
            allowNull: false
        },
        opnName: {
            type: DataTypes.STRING(250),
            field: 'opn_name'
        },
        description: {
            type:DataTypes.STRING(250),
            field:'description'
        },
        workCenter: {
            type: DataTypes.STRING(250),
            field: 'work_center'
        },
        type: {
            type: DataTypes.STRING(250),
            field: 'type'
        },
        
        image1: {
            type: DataTypes.STRING(250),
            field: 'image1'
        },
        image2: {
            type: DataTypes.STRING(250),
            field: 'image2'
        },
        image3: {
            type: DataTypes.STRING(250),
            field: 'image3'
        },
        image4: {
            type: DataTypes.STRING(250),
            field: 'image4'
        },

        drgId:{
            type: DataTypes.INTEGER(11).UNSIGNED,
            field:'drg_id'
        },
        altProcess: {
            type: DataTypes.BOOLEAN,
            field: 'alt_process',
            defaultValue: false
        },
        addKind: {
            type: DataTypes.BOOLEAN,
            field: 'add_kind',
            defaultValue: false
        },
        status:
        {
            type: DataTypes.BOOLEAN,
            field: 'status',
            allowNull: true
        },
        qpTechConfirm:
        {
            type: DataTypes.BOOLEAN,
            field: 'qp_tech_confirm',
            allowNull: true
        },
        masterApproval:
        {
            type: DataTypes.BOOLEAN,
            field: 'master_approval',
            allowNull: true
        },
        qpMasterApproval:
        {
            type: DataTypes.BOOLEAN,
            field: 'qp_master_approval',
            allowNull: true
        },

        createdBy: {
            type: DataTypes.STRING(50),
            field: 'created_by'
        },
        updatedBy: {
            type: DataTypes.STRING(50),
            field: 'updated_by'
        },
        deletedBy: {
            type: DataTypes.STRING(50),
            field: 'deleted_by'
        },
        deleteStatus:
        {
            type: DataTypes.BOOLEAN,
            field: 'delete_status',
            defaultValue: false
        },
        
    },
    {
        timestamps:true,
        tableName:'operation'
    })

    Operation.associate = function(models) {
        Operation.hasMany(models.Process, { foreignKey: 'opnId' })
        Operation.belongsTo(models.Drawing, { foreignKey: 'drgId'})
    }
    return Operation
}