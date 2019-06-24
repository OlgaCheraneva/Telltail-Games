export function AfterBulkCreate(...args: any[]): any;
export function AfterBulkDelete(...args: any[]): any;
export function AfterBulkDestroy(...args: any[]): any;
export function AfterBulkRestore(...args: any[]): any;
export function AfterBulkUpdate(...args: any[]): any;
export function AfterCreate(...args: any[]): any;
export function AfterDelete(...args: any[]): any;
export function AfterDestroy(...args: any[]): any;
export function AfterFind(...args: any[]): any;
export function AfterRestore(...args: any[]): any;
export function AfterSave(...args: any[]): any;
export function AfterUpdate(...args: any[]): any;
export function AfterUpsert(...args: any[]): any;
export function AfterValidate(...args: any[]): any;
export function AllowNull(...args: any[]): any;
export function AutoIncrement(target: any, propertyName: any): void;
export function BeforeBulkCreate(...args: any[]): any;
export function BeforeBulkDelete(...args: any[]): any;
export function BeforeBulkDestroy(...args: any[]): any;
export function BeforeBulkRestore(...args: any[]): any;
export function BeforeBulkUpdate(...args: any[]): any;
export function BeforeCount(...args: any[]): any;
export function BeforeCreate(...args: any[]): any;
export function BeforeDelete(...args: any[]): any;
export function BeforeDestroy(...args: any[]): any;
export function BeforeFind(...args: any[]): any;
export function BeforeFindAfterExpandIncludeAll(...args: any[]): any;
export function BeforeFindAfterOptions(...args: any[]): any;
export function BeforeRestore(...args: any[]): any;
export function BeforeSave(...args: any[]): any;
export function BeforeUpdate(...args: any[]): any;
export function BeforeUpsert(...args: any[]): any;
export function BeforeValidate(...args: any[]): any;
export function BelongsTo(associatedClassGetter: any, optionsOrForeignKey: any): any;
export function BelongsToMany(associatedClassGetter: any, throughOrOptions: any, foreignKey: any, otherKey: any): any;
export function Column(...args: any[]): any;
export function Comment(value: any): any;
export function Contains(value: any): any;
export function CreatedAt(target: any, propertyName: any): void;
export class DataType {
    static IndexHints: {
        FORCE: string;
        IGNORE: string;
        USE: string;
    };
    static Op: {
        adjacent: symbol;
        all: symbol;
        and: symbol;
        any: symbol;
        between: symbol;
        col: symbol;
        contained: symbol;
        contains: symbol;
        endsWith: symbol;
        eq: symbol;
        gt: symbol;
        gte: symbol;
        iLike: symbol;
        iRegexp: symbol;
        in: symbol;
        is: symbol;
        join: symbol;
        like: symbol;
        lt: symbol;
        lte: symbol;
        ne: symbol;
        noExtendLeft: symbol;
        noExtendRight: symbol;
        not: symbol;
        notBetween: symbol;
        notILike: symbol;
        notIRegexp: symbol;
        notIn: symbol;
        notLike: symbol;
        notRegexp: symbol;
        or: symbol;
        overlap: symbol;
        placeholder: symbol;
        regexp: symbol;
        startsWith: symbol;
        strictLeft: symbol;
        strictRight: symbol;
        substring: symbol;
        values: symbol;
    };
    static QueryTypes: {
        BULKDELETE: string;
        BULKUPDATE: string;
        DELETE: string;
        DESCRIBE: string;
        FOREIGNKEYS: string;
        INSERT: string;
        RAW: string;
        SELECT: string;
        SHOWCONSTRAINTS: string;
        SHOWINDEXES: string;
        SHOWTABLES: string;
        UPDATE: string;
        UPSERT: string;
        VERSION: string;
    };
    // Circular reference from index.DataType
    static Sequelize: any;
    static TableHints: {
        NOEXPAND: string;
        NOLOCK: string;
        NOWAIT: string;
        PAGLOCK: string;
        READCOMMITTED: string;
        READPAST: string;
        READUNCOMMITTED: string;
        REPEATABLEREAD: string;
        ROWLOCK: string;
        SERIALIZABLE: string;
        SNAPSHOT: string;
        TABLOCK: string;
        TABLOCKX: string;
        UPDLOCK: string;
        XLOCK: string;
    };
    static addHook(hookType: any, name: any, fn: any): any;
    static afterAssociate(name: any, callback: any): any;
    static afterBulkCreate(name: any, callback: any): any;
    static afterBulkDestroy(name: any, callback: any): any;
    static afterBulkRestore(name: any, callback: any): any;
    static afterBulkSync(name: any, callback: any): any;
    static afterBulkUpdate(name: any, callback: any): any;
    static afterConnect(name: any, callback: any): any;
    static afterCreate(name: any, callback: any): any;
    static afterDefine(name: any, callback: any): any;
    static afterDestroy(name: any, callback: any): any;
    static afterFind(name: any, callback: any): any;
    static afterInit(name: any, callback: any): any;
    static afterRestore(name: any, callback: any): any;
    static afterSave(name: any, callback: any): any;
    static afterSync(name: any, callback: any): any;
    static afterUpdate(name: any, callback: any): any;
    static afterUpsert(name: any, callback: any): any;
    static afterValidate(name: any, callback: any): any;
    static and(args: any): any;
    static beforeAssociate(name: any, callback: any): any;
    static beforeBulkCreate(name: any, callback: any): any;
    static beforeBulkDestroy(name: any, callback: any): any;
    static beforeBulkRestore(name: any, callback: any): any;
    static beforeBulkSync(name: any, callback: any): any;
    static beforeBulkUpdate(name: any, callback: any): any;
    static beforeConnect(name: any, callback: any): any;
    static beforeCount(name: any, callback: any): any;
    static beforeCreate(name: any, callback: any): any;
    static beforeDefine(name: any, callback: any): any;
    static beforeDestroy(name: any, callback: any): any;
    static beforeFind(name: any, callback: any): any;
    static beforeFindAfterExpandIncludeAll(name: any, callback: any): any;
    static beforeFindAfterOptions(name: any, callback: any): any;
    static beforeInit(name: any, callback: any): any;
    static beforeRestore(name: any, callback: any): any;
    static beforeSave(name: any, callback: any): any;
    static beforeSync(name: any, callback: any): any;
    static beforeUpdate(name: any, callback: any): any;
    static beforeUpsert(name: any, callback: any): any;
    static beforeValidate(name: any, callback: any): any;
    static cast(val: any, type: any): any;
    static col(col: any): any;
    static fn(fn: any, args: any): any;
    static hasHook(hookType: any): any;
    static hasHooks(hookType: any): any;
    static json(conditionsOrPath: any, value: any): any;
    static literal(val: any): any;
    static options: {
        hooks: {};
    };
    static or(args: any): any;
    static removeHook(hookType: any, name: any): any;
    static runHooks(hooks: any, hookArgs: any): any;
    static useCLS(ns: any): any;
    static useInflection(_inflection: any): void;
    static validationFailed(name: any, callback: any): any;
    static version: string;
    static where(attr: any, comparator: any, logic: any): any;
    constructor(database: any, username: any, password: any, options: any, ...args: any[]);
    options: any;
    config: any;
    dialect: any;
    queryInterface: any;
    models: any;
    modelManager: any;
    connectionManager: any;
    importCache: any;
    test: any;
    addHook(hookType: any, name: any, fn: any): any;
    afterAssociate(name: any, callback: any): any;
    afterBulkCreate(name: any, callback: any): any;
    afterBulkDestroy(name: any, callback: any): any;
    afterBulkRestore(name: any, callback: any): any;
    afterBulkSync(name: any, callback: any): any;
    afterBulkUpdate(name: any, callback: any): any;
    afterConnect(name: any, callback: any): any;
    afterCreate(name: any, callback: any): any;
    afterDefine(name: any, callback: any): any;
    afterDestroy(name: any, callback: any): any;
    afterFind(name: any, callback: any): any;
    afterInit(name: any, callback: any): any;
    afterRestore(name: any, callback: any): any;
    afterSave(name: any, callback: any): any;
    afterSync(name: any, callback: any): any;
    afterUpdate(name: any, callback: any): any;
    afterUpsert(name: any, callback: any): any;
    afterValidate(name: any, callback: any): any;
    and(args: any): any;
    authenticate(options: any): any;
    beforeAssociate(name: any, callback: any): any;
    beforeBulkCreate(name: any, callback: any): any;
    beforeBulkDestroy(name: any, callback: any): any;
    beforeBulkRestore(name: any, callback: any): any;
    beforeBulkSync(name: any, callback: any): any;
    beforeBulkUpdate(name: any, callback: any): any;
    beforeConnect(name: any, callback: any): any;
    beforeCount(name: any, callback: any): any;
    beforeCreate(name: any, callback: any): any;
    beforeDefine(name: any, callback: any): any;
    beforeDestroy(name: any, callback: any): any;
    beforeFind(name: any, callback: any): any;
    beforeFindAfterExpandIncludeAll(name: any, callback: any): any;
    beforeFindAfterOptions(name: any, callback: any): any;
    beforeInit(name: any, callback: any): any;
    beforeRestore(name: any, callback: any): any;
    beforeSave(name: any, callback: any): any;
    beforeSync(name: any, callback: any): any;
    beforeUpdate(name: any, callback: any): any;
    beforeUpsert(name: any, callback: any): any;
    beforeValidate(name: any, callback: any): any;
    cast(val: any, type: any): any;
    close(): any;
    col(col: any): any;
    createSchema(schema: any, options: any): any;
    databaseVersion(options: any): any;
    define(modelName: any, attributes: any, options: any): any;
    drop(options: any): any;
    dropAllSchemas(options: any): any;
    dropSchema(schema: any, options: any): any;
    escape(value: any): any;
    fn(fn: any, args: any): any;
    getDatabaseName(): any;
    getDialect(): any;
    getQueryInterface(): any;
    hasHook(hookType: any): any;
    hasHooks(hookType: any): any;
    isDefined(modelName: any): any;
    json(conditionsOrPath: any, value: any): any;
    literal(val: any): any;
    log(args: any): void;
    model(modelName: any): any;
    normalizeAttribute(attribute: any): any;
    normalizeDataType(Type: any): any;
    or(args: any): any;
    query(sql: any, options: any): any;
    random(): any;
    refreshTypes(): void;
    removeHook(hookType: any, name: any): any;
    runHooks(hooks: any, hookArgs: any): any;
    set(variables: any, options: any): any;
    showAllSchemas(options: any): any;
    sync(options: any): any;
    transaction(options: any, autoCallback: any): any;
    truncate(options: any): any;
    validate(options: any): any;
    validationFailed(name: any, callback: any): any;
    where(attr: any, comparator: any, logic: any): any;
}
export namespace DataType {
    class ABSTRACT {
        static extend(oldType: any): any;
        static key: string;
        static types: {};
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
    }
    class ARRAY {
        static extend(oldType: any): any;
        static is(obj: any, type: any): any;
        static key: string;
        static types: {};
        static warn(link: any, text: any): void;
        constructor(p0: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class AccessDeniedError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(parent: any);
        name: any;
    }
    class Association {
        // Circular reference from index.DataType.Association
        static Association: any;
        constructor(source: any, target: any, options: any);
        source: any;
        target: any;
        options: any;
        scope: any;
        isSelfAssociation: any;
        as: any;
        associationType: any;
        inspect(): any;
        toInstanceArray(input: any): any;
    }
    namespace Association {
        class BelongsTo {
            // Circular reference from index.DataType.Association.BelongsTo
            static Association: any;
            // Circular reference from index.DataType.Association.BelongsTo
            static BelongsTo: any;
            constructor(source: any, target: any, options: any);
            associationType: any;
            isSingleAssociation: any;
            foreignKeyAttribute: any;
            isAliased: any;
            as: any;
            foreignKey: any;
            identifier: any;
            identifierField: any;
            targetKey: any;
            targetKeyField: any;
            targetKeyIsPrimary: any;
            targetIdentifier: any;
            associationAccessor: any;
            accessors: any;
            create(sourceInstance: any, values: any, options: any): any;
            get(instances: any, options: any): any;
            inspect(): any;
            mixin(obj: any): void;
            set(sourceInstance: any, associatedInstance: any, options: any): any;
            toInstanceArray(input: any): any;
            verifyAssociationAlias(alias: any): any;
        }
        namespace BelongsTo {
            class BelongsToMany {
                // Circular reference from index.DataType.Association.BelongsTo.BelongsToMany
                static Association: any;
                // Circular reference from index.DataType.Association.BelongsTo.BelongsToMany
                static BelongsTo: any;
                // Circular reference from index.DataType.Association.BelongsTo.BelongsToMany
                static BelongsToMany: any;
                // Too-deep object hierarchy from index.DataType.Association.BelongsTo.BelongsToMany
                static HasMany: any;
                // Too-deep object hierarchy from index.DataType.Association.BelongsTo.BelongsToMany
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                targetAssociation: any;
                sequelize: any;
                through: any;
                isMultiAssociation: any;
                doubleLinked: any;
                isAliased: any;
                as: any;
                combinedTableName: any;
                foreignKeyAttribute: any;
                foreignKey: any;
                foreignKeyDefault: any;
                otherKeyAttribute: any;
                otherKey: any;
                otherKeyDefault: any;
                options: any;
                throughModel: any;
                combinedName: any;
                associationAccessor: any;
                accessors: any;
            }
            class HasMany {
                // Circular reference from index.DataType.Association.BelongsTo.HasMany
                static Association: any;
                // Circular reference from index.DataType.Association.BelongsTo.HasMany
                static BelongsTo: any;
                // Too-deep object hierarchy from index.DataType.Association.BelongsTo.HasMany
                static BelongsToMany: any;
                // Circular reference from index.DataType.Association.BelongsTo.HasMany
                static HasMany: any;
                // Too-deep object hierarchy from index.DataType.Association.BelongsTo.HasMany
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                targetAssociation: any;
                sequelize: any;
                isMultiAssociation: any;
                foreignKeyAttribute: any;
                isAliased: any;
                as: any;
                foreignKey: any;
                identifierField: any;
                foreignKeyField: any;
                sourceKey: any;
                sourceKeyAttribute: any;
                sourceKeyField: any;
                associationAccessor: any;
                accessors: any;
            }
            class HasOne {
                // Circular reference from index.DataType.Association.BelongsTo.HasOne
                static Association: any;
                // Circular reference from index.DataType.Association.BelongsTo.HasOne
                static BelongsTo: any;
                // Too-deep object hierarchy from index.DataType.Association.BelongsTo.HasOne
                static BelongsToMany: any;
                // Too-deep object hierarchy from index.DataType.Association.BelongsTo.HasOne
                static HasMany: any;
                // Circular reference from index.DataType.Association.BelongsTo.HasOne
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                isSingleAssociation: any;
                foreignKeyAttribute: any;
                isAliased: any;
                as: any;
                foreignKey: any;
                sourceKey: any;
                sourceKeyAttribute: any;
                sourceKeyField: any;
                sourceKeyIsPrimary: any;
                associationAccessor: any;
                identifierField: any;
                accessors: any;
            }
        }
        class BelongsToMany {
            // Circular reference from index.DataType.Association.BelongsToMany
            static Association: any;
            // Circular reference from index.DataType.Association.BelongsToMany
            static BelongsToMany: any;
            constructor(source: any, target: any, options: any);
            associationType: any;
            targetAssociation: any;
            sequelize: any;
            through: any;
            isMultiAssociation: any;
            doubleLinked: any;
            isAliased: any;
            as: any;
            combinedTableName: any;
            foreignKeyAttribute: any;
            foreignKey: any;
            foreignKeyDefault: any;
            otherKeyAttribute: any;
            otherKey: any;
            otherKeyDefault: any;
            options: any;
            throughModel: any;
            combinedName: any;
            associationAccessor: any;
            accessors: any;
            add(sourceInstance: any, newInstances: any, options: any): any;
            count(instance: any, options: any): any;
            create(sourceInstance: any, values: any, options: any): any;
            get(instance: any, options: any): any;
            has(sourceInstance: any, instances: any, options: any): any;
            inspect(): any;
            mixin(obj: any): void;
            remove(sourceInstance: any, oldAssociatedObjects: any, options: any): any;
            set(sourceInstance: any, newAssociatedObjects: any, options: any): any;
            toInstanceArray(input: any): any;
            verifyAssociationAlias(alias: any): any;
        }
        namespace BelongsToMany {
            class BelongsTo {
                // Circular reference from index.DataType.Association.BelongsToMany.BelongsTo
                static Association: any;
                // Circular reference from index.DataType.Association.BelongsToMany.BelongsTo
                static BelongsTo: any;
                // Circular reference from index.DataType.Association.BelongsToMany.BelongsTo
                static BelongsToMany: any;
                // Too-deep object hierarchy from index.DataType.Association.BelongsToMany.BelongsTo
                static HasMany: any;
                // Too-deep object hierarchy from index.DataType.Association.BelongsToMany.BelongsTo
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                isSingleAssociation: any;
                foreignKeyAttribute: any;
                isAliased: any;
                as: any;
                foreignKey: any;
                identifier: any;
                identifierField: any;
                targetKey: any;
                targetKeyField: any;
                targetKeyIsPrimary: any;
                targetIdentifier: any;
                associationAccessor: any;
                accessors: any;
            }
            class HasMany {
                // Circular reference from index.DataType.Association.BelongsToMany.HasMany
                static Association: any;
                // Too-deep object hierarchy from index.DataType.Association.BelongsToMany.HasMany
                static BelongsTo: any;
                // Circular reference from index.DataType.Association.BelongsToMany.HasMany
                static BelongsToMany: any;
                // Circular reference from index.DataType.Association.BelongsToMany.HasMany
                static HasMany: any;
                // Too-deep object hierarchy from index.DataType.Association.BelongsToMany.HasMany
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                targetAssociation: any;
                sequelize: any;
                isMultiAssociation: any;
                foreignKeyAttribute: any;
                isAliased: any;
                as: any;
                foreignKey: any;
                identifierField: any;
                foreignKeyField: any;
                sourceKey: any;
                sourceKeyAttribute: any;
                sourceKeyField: any;
                associationAccessor: any;
                accessors: any;
            }
            class HasOne {
                // Circular reference from index.DataType.Association.BelongsToMany.HasOne
                static Association: any;
                // Too-deep object hierarchy from index.DataType.Association.BelongsToMany.HasOne
                static BelongsTo: any;
                // Circular reference from index.DataType.Association.BelongsToMany.HasOne
                static BelongsToMany: any;
                // Too-deep object hierarchy from index.DataType.Association.BelongsToMany.HasOne
                static HasMany: any;
                // Circular reference from index.DataType.Association.BelongsToMany.HasOne
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                isSingleAssociation: any;
                foreignKeyAttribute: any;
                isAliased: any;
                as: any;
                foreignKey: any;
                sourceKey: any;
                sourceKeyAttribute: any;
                sourceKeyField: any;
                sourceKeyIsPrimary: any;
                associationAccessor: any;
                identifierField: any;
                accessors: any;
            }
        }
        class HasMany {
            // Circular reference from index.DataType.Association.HasMany
            static Association: any;
            // Circular reference from index.DataType.Association.HasMany
            static HasMany: any;
            constructor(source: any, target: any, options: any);
            associationType: any;
            targetAssociation: any;
            sequelize: any;
            isMultiAssociation: any;
            foreignKeyAttribute: any;
            isAliased: any;
            as: any;
            foreignKey: any;
            identifierField: any;
            foreignKeyField: any;
            sourceKey: any;
            sourceKeyAttribute: any;
            sourceKeyField: any;
            associationAccessor: any;
            accessors: any;
            add(sourceInstance: any, targetInstances: any, options: any): any;
            count(instance: any, options: any): any;
            create(sourceInstance: any, values: any, options: any): any;
            get(instances: any, options: any): any;
            has(sourceInstance: any, targetInstances: any, options: any): any;
            inspect(): any;
            mixin(obj: any): void;
            remove(sourceInstance: any, targetInstances: any, options: any): any;
            set(sourceInstance: any, targetInstances: any, options: any): any;
            toInstanceArray(input: any): any;
            verifyAssociationAlias(alias: any): any;
        }
        namespace HasMany {
            class BelongsTo {
                // Circular reference from index.DataType.Association.HasMany.BelongsTo
                static Association: any;
                // Circular reference from index.DataType.Association.HasMany.BelongsTo
                static BelongsTo: any;
                // Too-deep object hierarchy from index.DataType.Association.HasMany.BelongsTo
                static BelongsToMany: any;
                // Circular reference from index.DataType.Association.HasMany.BelongsTo
                static HasMany: any;
                // Too-deep object hierarchy from index.DataType.Association.HasMany.BelongsTo
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                isSingleAssociation: any;
                foreignKeyAttribute: any;
                isAliased: any;
                as: any;
                foreignKey: any;
                identifier: any;
                identifierField: any;
                targetKey: any;
                targetKeyField: any;
                targetKeyIsPrimary: any;
                targetIdentifier: any;
                associationAccessor: any;
                accessors: any;
            }
            class BelongsToMany {
                // Circular reference from index.DataType.Association.HasMany.BelongsToMany
                static Association: any;
                // Too-deep object hierarchy from index.DataType.Association.HasMany.BelongsToMany
                static BelongsTo: any;
                // Circular reference from index.DataType.Association.HasMany.BelongsToMany
                static BelongsToMany: any;
                // Circular reference from index.DataType.Association.HasMany.BelongsToMany
                static HasMany: any;
                // Too-deep object hierarchy from index.DataType.Association.HasMany.BelongsToMany
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                targetAssociation: any;
                sequelize: any;
                through: any;
                isMultiAssociation: any;
                doubleLinked: any;
                isAliased: any;
                as: any;
                combinedTableName: any;
                foreignKeyAttribute: any;
                foreignKey: any;
                foreignKeyDefault: any;
                otherKeyAttribute: any;
                otherKey: any;
                otherKeyDefault: any;
                options: any;
                throughModel: any;
                combinedName: any;
                associationAccessor: any;
                accessors: any;
            }
            class HasOne {
                // Circular reference from index.DataType.Association.HasMany.HasOne
                static Association: any;
                // Too-deep object hierarchy from index.DataType.Association.HasMany.HasOne
                static BelongsTo: any;
                // Too-deep object hierarchy from index.DataType.Association.HasMany.HasOne
                static BelongsToMany: any;
                // Circular reference from index.DataType.Association.HasMany.HasOne
                static HasMany: any;
                // Circular reference from index.DataType.Association.HasMany.HasOne
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                isSingleAssociation: any;
                foreignKeyAttribute: any;
                isAliased: any;
                as: any;
                foreignKey: any;
                sourceKey: any;
                sourceKeyAttribute: any;
                sourceKeyField: any;
                sourceKeyIsPrimary: any;
                associationAccessor: any;
                identifierField: any;
                accessors: any;
            }
        }
        class HasOne {
            // Circular reference from index.DataType.Association.HasOne
            static Association: any;
            // Circular reference from index.DataType.Association.HasOne
            static HasOne: any;
            constructor(source: any, target: any, options: any);
            associationType: any;
            isSingleAssociation: any;
            foreignKeyAttribute: any;
            isAliased: any;
            as: any;
            foreignKey: any;
            sourceKey: any;
            sourceKeyAttribute: any;
            sourceKeyField: any;
            sourceKeyIsPrimary: any;
            associationAccessor: any;
            identifierField: any;
            accessors: any;
            create(sourceInstance: any, values: any, options: any): any;
            get(instances: any, options: any): any;
            inspect(): any;
            mixin(obj: any): void;
            set(sourceInstance: any, associatedInstance: any, options: any): any;
            toInstanceArray(input: any): any;
            verifyAssociationAlias(alias: any): any;
        }
        namespace HasOne {
            class BelongsTo {
                // Circular reference from index.DataType.Association.HasOne.BelongsTo
                static Association: any;
                // Circular reference from index.DataType.Association.HasOne.BelongsTo
                static BelongsTo: any;
                // Too-deep object hierarchy from index.DataType.Association.HasOne.BelongsTo
                static BelongsToMany: any;
                // Too-deep object hierarchy from index.DataType.Association.HasOne.BelongsTo
                static HasMany: any;
                // Circular reference from index.DataType.Association.HasOne.BelongsTo
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                isSingleAssociation: any;
                foreignKeyAttribute: any;
                isAliased: any;
                as: any;
                foreignKey: any;
                identifier: any;
                identifierField: any;
                targetKey: any;
                targetKeyField: any;
                targetKeyIsPrimary: any;
                targetIdentifier: any;
                associationAccessor: any;
                accessors: any;
            }
            class BelongsToMany {
                // Circular reference from index.DataType.Association.HasOne.BelongsToMany
                static Association: any;
                // Too-deep object hierarchy from index.DataType.Association.HasOne.BelongsToMany
                static BelongsTo: any;
                // Circular reference from index.DataType.Association.HasOne.BelongsToMany
                static BelongsToMany: any;
                // Too-deep object hierarchy from index.DataType.Association.HasOne.BelongsToMany
                static HasMany: any;
                // Circular reference from index.DataType.Association.HasOne.BelongsToMany
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                targetAssociation: any;
                sequelize: any;
                through: any;
                isMultiAssociation: any;
                doubleLinked: any;
                isAliased: any;
                as: any;
                combinedTableName: any;
                foreignKeyAttribute: any;
                foreignKey: any;
                foreignKeyDefault: any;
                otherKeyAttribute: any;
                otherKey: any;
                otherKeyDefault: any;
                options: any;
                throughModel: any;
                combinedName: any;
                associationAccessor: any;
                accessors: any;
            }
            class HasMany {
                // Circular reference from index.DataType.Association.HasOne.HasMany
                static Association: any;
                // Too-deep object hierarchy from index.DataType.Association.HasOne.HasMany
                static BelongsTo: any;
                // Too-deep object hierarchy from index.DataType.Association.HasOne.HasMany
                static BelongsToMany: any;
                // Circular reference from index.DataType.Association.HasOne.HasMany
                static HasMany: any;
                // Circular reference from index.DataType.Association.HasOne.HasMany
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                targetAssociation: any;
                sequelize: any;
                isMultiAssociation: any;
                foreignKeyAttribute: any;
                isAliased: any;
                as: any;
                foreignKey: any;
                identifierField: any;
                foreignKeyField: any;
                sourceKey: any;
                sourceKeyAttribute: any;
                sourceKeyField: any;
                associationAccessor: any;
                accessors: any;
            }
        }
    }
    class AssociationError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(message: any);
        name: any;
    }
    class BIGINT {
        static UNSIGNED: any;
        static ZEROFILL: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: boolean;
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class BLOB {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        constructor(p0: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class BOOLEAN {
        static extend(oldType: any): any;
        static key: string;
        static parse(value: any): any;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class BaseError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(message: any);
        name: any;
    }
    class BulkRecordError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(error: any, record: any);
        name: any;
        errors: any;
        record: any;
    }
    class CHAR {
        static BINARY: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        constructor(p0: any, p1: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class CIDR {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            postgres: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class CITEXT {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            postgres: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class ConnectionAcquireTimeoutError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(parent: any);
        name: any;
    }
    class ConnectionError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(parent: any);
        name: any;
        parent: any;
        original: any;
    }
    class ConnectionRefusedError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(parent: any);
        name: any;
    }
    class ConnectionTimedOutError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(parent: any);
        name: any;
    }
    class DATE {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        constructor(p0: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class DATEONLY {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
    }
    class DECIMAL {
        static UNSIGNED: any;
        static ZEROFILL: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        constructor(p0: any, p1: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class DOUBLE {
        static UNSIGNED: any;
        static ZEROFILL: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        constructor(p0: any, p1: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    namespace DataTypes {
        class ABSTRACT {
            static extend(oldType: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class ARRAY {
            static extend(oldType: any): any;
            static is(obj: any, type: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class BIGINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class BLOB {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class BOOLEAN {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class CHAR {
            static BINARY: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class CIDR {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class CITEXT {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DATE {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DATEONLY {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class DECIMAL {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DOUBLE {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class ENUM {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class FLOAT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class GEOGRAPHY {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class GEOMETRY {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class HSTORE {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class INET {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class INTEGER {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class JSON {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(): any;
        }
        class JSONB {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(): any;
        }
        class MACADDR {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class MEDIUMINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class NOW {
            static extend(oldType: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class NUMBER {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class NUMERIC {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class RANGE {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class REAL {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class SMALLINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class STRING {
            static BINARY: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class TEXT {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class TIME {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class TINYINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class UUID {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any, options: any): any;
        }
        class UUIDV1 {
            static extend(oldType: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any, options: any): any;
        }
        class UUIDV4 {
            static extend(oldType: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any, options: any): any;
        }
        class VIRTUAL {
            static extend(oldType: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        namespace mariadb {
            function DATE(): any;
            namespace DATE {
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.DATE
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.DATE
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.DATE
                const parse: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.DATE
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.DATE
                const warn: any;
            }
            function DATEONLY(): any;
            namespace DATEONLY {
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.DATEONLY
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.DATEONLY
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.DATEONLY
                const parse: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.DATEONLY
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.DATEONLY
                const warn: any;
            }
            function DECIMAL(): any;
            namespace DECIMAL {
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.DECIMAL
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.DECIMAL
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.DECIMAL
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.DECIMAL
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.DECIMAL
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.DECIMAL
                const warn: any;
            }
            function ENUM(): any;
            namespace ENUM {
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.ENUM
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.ENUM
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.ENUM
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.ENUM
                const warn: any;
            }
            function GEOMETRY(p0: any, p1: any): any;
            namespace GEOMETRY {
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.GEOMETRY
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.GEOMETRY
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.GEOMETRY
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.GEOMETRY
                const warn: any;
            }
            function JSON(): any;
            namespace JSON {
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.JSON
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.JSON
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.JSON
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.JSON
                const warn: any;
            }
            function UUID(): any;
            namespace UUID {
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.UUID
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.UUID
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.UUID
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mariadb.UUID
                const warn: any;
            }
        }
        namespace mssql {
            function BIGINT(p0: any): any;
            namespace BIGINT {
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.BIGINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.BIGINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.BIGINT
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.BIGINT
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.BIGINT
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.BIGINT
                const warn: any;
            }
            function BLOB(): any;
            namespace BLOB {
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.BLOB
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.BLOB
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.BLOB
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.BLOB
                const warn: any;
            }
            function BOOLEAN(): any;
            namespace BOOLEAN {
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.BOOLEAN
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.BOOLEAN
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.BOOLEAN
                const parse: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.BOOLEAN
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.BOOLEAN
                const warn: any;
            }
            function DATE(): any;
            namespace DATE {
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.DATE
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.DATE
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.DATE
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.DATE
                const warn: any;
            }
            function DATEONLY(): any;
            namespace DATEONLY {
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.DATEONLY
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.DATEONLY
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.DATEONLY
                const parse: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.DATEONLY
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.DATEONLY
                const warn: any;
            }
            function ENUM(): any;
            namespace ENUM {
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.ENUM
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.ENUM
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.ENUM
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.ENUM
                const warn: any;
            }
            function FLOAT(p0: any, p1: any): any;
            namespace FLOAT {
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.FLOAT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.FLOAT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.FLOAT
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.FLOAT
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.FLOAT
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.FLOAT
                const warn: any;
            }
            function INTEGER(p0: any): any;
            namespace INTEGER {
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.INTEGER
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.INTEGER
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.INTEGER
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.INTEGER
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.INTEGER
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.INTEGER
                const warn: any;
            }
            function NOW(): any;
            namespace NOW {
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.NOW
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.NOW
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.NOW
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.NOW
                const warn: any;
            }
            function REAL(p0: any, p1: any): any;
            namespace REAL {
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.REAL
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.REAL
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.REAL
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.REAL
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.REAL
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.REAL
                const warn: any;
            }
            function SMALLINT(p0: any): any;
            namespace SMALLINT {
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.SMALLINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.SMALLINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.SMALLINT
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.SMALLINT
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.SMALLINT
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.SMALLINT
                const warn: any;
            }
            function STRING(): any;
            namespace STRING {
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.STRING
                const BINARY: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.STRING
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.STRING
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.STRING
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.STRING
                const warn: any;
            }
            function TEXT(): any;
            namespace TEXT {
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.TEXT
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.TEXT
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.TEXT
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.TEXT
                const warn: any;
            }
            function TINYINT(p0: any): any;
            namespace TINYINT {
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.TINYINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.TINYINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.TINYINT
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.TINYINT
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.TINYINT
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.TINYINT
                const warn: any;
            }
            function UUID(): any;
            namespace UUID {
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.UUID
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.UUID
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.UUID
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mssql.UUID
                const warn: any;
            }
        }
        namespace mysql {
            function DATE(): any;
            namespace DATE {
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.DATE
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.DATE
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.DATE
                const parse: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.DATE
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.DATE
                const warn: any;
            }
            function DATEONLY(): any;
            namespace DATEONLY {
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.DATEONLY
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.DATEONLY
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.DATEONLY
                const parse: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.DATEONLY
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.DATEONLY
                const warn: any;
            }
            function DECIMAL(): any;
            namespace DECIMAL {
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.DECIMAL
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.DECIMAL
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.DECIMAL
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.DECIMAL
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.DECIMAL
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.DECIMAL
                const warn: any;
            }
            function ENUM(): any;
            namespace ENUM {
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.ENUM
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.ENUM
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.ENUM
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.ENUM
                const warn: any;
            }
            function GEOMETRY(p0: any, p1: any): any;
            namespace GEOMETRY {
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.GEOMETRY
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.GEOMETRY
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.GEOMETRY
                const parse: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.GEOMETRY
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.GEOMETRY
                const warn: any;
            }
            function JSON(): any;
            namespace JSON {
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.JSON
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.JSON
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.JSON
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.JSON
                const warn: any;
            }
            function UUID(): any;
            namespace UUID {
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.UUID
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.UUID
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.UUID
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.mysql.UUID
                const warn: any;
            }
        }
        namespace postgres {
            function BIGINT(p0: any): any;
            namespace BIGINT {
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.BIGINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.BIGINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.BIGINT
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.BIGINT
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.BIGINT
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.BIGINT
                const warn: any;
            }
            function BLOB(): any;
            namespace BLOB {
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.BLOB
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.BLOB
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.BLOB
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.BLOB
                const warn: any;
            }
            function BOOLEAN(): any;
            namespace BOOLEAN {
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.BOOLEAN
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.BOOLEAN
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.BOOLEAN
                const parse: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.BOOLEAN
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.BOOLEAN
                const warn: any;
            }
            function CHAR(): any;
            namespace CHAR {
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.CHAR
                const BINARY: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.CHAR
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.CHAR
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.CHAR
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.CHAR
                const warn: any;
            }
            function CITEXT(): any;
            namespace CITEXT {
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.CITEXT
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.CITEXT
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.CITEXT
                const parse: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.CITEXT
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.CITEXT
                const warn: any;
            }
            function DATE(): any;
            namespace DATE {
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.DATE
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.DATE
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.DATE
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.DATE
                const warn: any;
            }
            function DATEONLY(): any;
            namespace DATEONLY {
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.DATEONLY
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.DATEONLY
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.DATEONLY
                const parse: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.DATEONLY
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.DATEONLY
                const warn: any;
            }
            function DECIMAL(): any;
            namespace DECIMAL {
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.DECIMAL
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.DECIMAL
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.DECIMAL
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.DECIMAL
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.DECIMAL
                const parse: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.DECIMAL
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.DECIMAL
                const warn: any;
            }
            function ENUM(): any;
            namespace ENUM {
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.ENUM
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.ENUM
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.ENUM
                const parse: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.ENUM
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.ENUM
                const warn: any;
            }
            function FLOAT(p0: any, p1: any): any;
            namespace FLOAT {
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.FLOAT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.FLOAT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.FLOAT
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.FLOAT
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.FLOAT
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.FLOAT
                const warn: any;
            }
            function GEOGRAPHY(): any;
            namespace GEOGRAPHY {
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.GEOGRAPHY
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.GEOGRAPHY
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.GEOGRAPHY
                const parse: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.GEOGRAPHY
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.GEOGRAPHY
                const warn: any;
            }
            function GEOMETRY(): any;
            namespace GEOMETRY {
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.GEOMETRY
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.GEOMETRY
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.GEOMETRY
                const parse: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.GEOMETRY
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.GEOMETRY
                const warn: any;
            }
            function HSTORE(): any;
            namespace HSTORE {
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.HSTORE
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.HSTORE
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.HSTORE
                const parse: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.HSTORE
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.HSTORE
                const warn: any;
            }
            function INTEGER(p0: any): any;
            namespace INTEGER {
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.INTEGER
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.INTEGER
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.INTEGER
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.INTEGER
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.INTEGER
                const parse: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.INTEGER
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.INTEGER
                const warn: any;
            }
            function RANGE(): any;
            namespace RANGE {
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.RANGE
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.RANGE
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.RANGE
                const parse: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.RANGE
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.RANGE
                const warn: any;
            }
            function REAL(p0: any): any;
            namespace REAL {
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.REAL
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.REAL
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.REAL
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.REAL
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.REAL
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.REAL
                const warn: any;
            }
            function SMALLINT(p0: any): any;
            namespace SMALLINT {
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.SMALLINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.SMALLINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.SMALLINT
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.SMALLINT
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.SMALLINT
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.SMALLINT
                const warn: any;
            }
            function STRING(): any;
            namespace STRING {
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.STRING
                const BINARY: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.STRING
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.STRING
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.STRING
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.STRING
                const warn: any;
            }
            function TEXT(): any;
            namespace TEXT {
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.TEXT
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.TEXT
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.TEXT
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.TEXT
                const warn: any;
            }
            function TINYINT(p0: any): any;
            namespace TINYINT {
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.TINYINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.TINYINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.TINYINT
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.TINYINT
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.TINYINT
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.postgres.TINYINT
                const warn: any;
            }
        }
        namespace sqlite {
            function BIGINT(p0: any): any;
            namespace BIGINT {
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.BIGINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.BIGINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.BIGINT
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.BIGINT
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.BIGINT
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.BIGINT
                const warn: any;
            }
            function CHAR(): any;
            namespace CHAR {
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.CHAR
                const BINARY: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.CHAR
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.CHAR
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.CHAR
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.CHAR
                const warn: any;
            }
            function CITEXT(): any;
            namespace CITEXT {
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.CITEXT
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.CITEXT
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.CITEXT
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.CITEXT
                const warn: any;
            }
            function DATE(): any;
            namespace DATE {
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.DATE
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.DATE
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.DATE
                const parse: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.DATE
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.DATE
                const warn: any;
            }
            function DATEONLY(): any;
            namespace DATEONLY {
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.DATEONLY
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.DATEONLY
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.DATEONLY
                const parse: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.DATEONLY
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.DATEONLY
                const warn: any;
            }
            function ENUM(): any;
            namespace ENUM {
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.ENUM
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.ENUM
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.ENUM
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.ENUM
                const warn: any;
            }
            function FLOAT(): any;
            namespace FLOAT {
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.FLOAT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.FLOAT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.FLOAT
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.FLOAT
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.FLOAT
                const parse: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.FLOAT
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.FLOAT
                const warn: any;
            }
            function INTEGER(p0: any): any;
            namespace INTEGER {
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.INTEGER
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.INTEGER
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.INTEGER
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.INTEGER
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.INTEGER
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.INTEGER
                const warn: any;
            }
            function JSON(): any;
            namespace JSON {
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.JSON
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.JSON
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.JSON
                const parse: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.JSON
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.JSON
                const warn: any;
            }
            function MEDIUMINT(p0: any): any;
            namespace MEDIUMINT {
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.MEDIUMINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.MEDIUMINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.MEDIUMINT
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.MEDIUMINT
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.MEDIUMINT
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.MEDIUMINT
                const warn: any;
            }
            function NUMBER(): any;
            namespace NUMBER {
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.NUMBER
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.NUMBER
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.NUMBER
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.NUMBER
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.NUMBER
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.NUMBER
                const warn: any;
            }
            function REAL(): any;
            namespace REAL {
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.REAL
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.REAL
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.REAL
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.REAL
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.REAL
                const parse: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.REAL
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.REAL
                const warn: any;
            }
            function SMALLINT(p0: any): any;
            namespace SMALLINT {
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.SMALLINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.SMALLINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.SMALLINT
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.SMALLINT
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.SMALLINT
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.SMALLINT
                const warn: any;
            }
            function STRING(): any;
            namespace STRING {
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.STRING
                const BINARY: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.STRING
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.STRING
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.STRING
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.STRING
                const warn: any;
            }
            function TEXT(): any;
            namespace TEXT {
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.TEXT
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.TEXT
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.TEXT
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.TEXT
                const warn: any;
            }
            function TINYINT(p0: any): any;
            namespace TINYINT {
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.TINYINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.TINYINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.TINYINT
                const extend: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.TINYINT
                const key: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.TINYINT
                const types: any;
                // Too-deep object hierarchy from index.DataType.DataTypes.sqlite.TINYINT
                const warn: any;
            }
        }
    }
    class DatabaseError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(parent: any);
        name: any;
        parent: any;
        original: any;
        sql: any;
    }
    namespace Deferrable {
        class INITIALLY_DEFERRED {
            toSql(): any;
        }
        class INITIALLY_IMMEDIATE {
            toSql(): any;
        }
        class NOT {
            toSql(): any;
        }
        class SET_DEFERRED {
            constructor(p0: any);
            toSql(queryGenerator: any): any;
        }
        class SET_IMMEDIATE {
            constructor(p0: any);
            toSql(queryGenerator: any): any;
        }
    }
    class ENUM {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: boolean;
            mssql: boolean;
            mysql: boolean;
            postgres: any[];
            sqlite: boolean;
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class EagerLoadingError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(message: any);
        name: any;
    }
    class EmptyResultError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(message: any);
        name: any;
    }
    class Error {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(message: any);
        name: any;
    }
    class ExclusionConstraintError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(options: any);
        name: any;
        message: any;
        constraint: any;
        fields: any;
        table: any;
    }
    class FLOAT {
        static UNSIGNED: any;
        static ZEROFILL: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        constructor(p0: any, p1: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class ForeignKeyConstraintError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(options: any);
        name: any;
        message: any;
        fields: any;
        table: any;
        value: any;
        index: any;
        reltype: any;
    }
    class GEOGRAPHY {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            postgres: any[];
        };
        static warn(link: any, text: any): void;
        constructor(p0: any, p1: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
    }
    class GEOMETRY {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: boolean;
            mysql: any[];
            postgres: any[];
            sqlite: boolean;
        };
        static warn(link: any, text: any): void;
        constructor(p0: any, p1: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
    }
    class HSTORE {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            postgres: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class HostNotFoundError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(parent: any);
        name: any;
    }
    class HostNotReachableError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(parent: any);
        name: any;
    }
    class INET {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            postgres: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class INTEGER {
        static UNSIGNED: any;
        static ZEROFILL: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class InstanceError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(message: any);
        name: any;
    }
    class InvalidConnectionError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(parent: any);
        name: any;
    }
    class JSON {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(): any;
    }
    class JSONB {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            postgres: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(): any;
    }
    class MACADDR {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            postgres: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class MEDIUMINT {
        static UNSIGNED: any;
        static ZEROFILL: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: boolean;
            mysql: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class Model {
        static QueryGenerator: any;
        static QueryInterface: any;
        static addHook(hookType: any, name: any, fn: any): any;
        static addScope(name: any, scope: any, options: any): void;
        static afterAssociate(name: any, callback: any): any;
        static afterBulkCreate(name: any, callback: any): any;
        static afterBulkDestroy(name: any, callback: any): any;
        static afterBulkRestore(name: any, callback: any): any;
        static afterBulkSync(name: any, callback: any): any;
        static afterBulkUpdate(name: any, callback: any): any;
        static afterCreate(name: any, callback: any): any;
        static afterDestroy(name: any, callback: any): any;
        static afterFind(name: any, callback: any): any;
        static afterRestore(name: any, callback: any): any;
        static afterSave(name: any, callback: any): any;
        static afterSync(name: any, callback: any): any;
        static afterUpdate(name: any, callback: any): any;
        static afterUpsert(name: any, callback: any): any;
        static afterValidate(name: any, callback: any): any;
        static aggregate(attribute: any, aggregateFunction: any, options: any): any;
        static beforeAssociate(name: any, callback: any): any;
        static beforeBulkCreate(name: any, callback: any): any;
        static beforeBulkDestroy(name: any, callback: any): any;
        static beforeBulkRestore(name: any, callback: any): any;
        static beforeBulkSync(name: any, callback: any): any;
        static beforeBulkUpdate(name: any, callback: any): any;
        static beforeCount(name: any, callback: any): any;
        static beforeCreate(name: any, callback: any): any;
        static beforeDestroy(name: any, callback: any): any;
        static beforeFind(name: any, callback: any): any;
        static beforeFindAfterExpandIncludeAll(name: any, callback: any): any;
        static beforeFindAfterOptions(name: any, callback: any): any;
        static beforeRestore(name: any, callback: any): any;
        static beforeSave(name: any, callback: any): any;
        static beforeSync(name: any, callback: any): any;
        static beforeUpdate(name: any, callback: any): any;
        static beforeUpsert(name: any, callback: any): any;
        static beforeValidate(name: any, callback: any): any;
        static belongsTo(target: any, options: any): any;
        static belongsToMany(target: any, options: any): any;
        static build(values: any, options: any): any;
        static bulkBuild(valueSets: any, options: any): any;
        static bulkCreate(records: any, options: any): any;
        static count(options: any): any;
        static create(values: any, options: any): any;
        static decrement(fields: any, options: any): any;
        static describe(schema: any, options: any): any;
        static destroy(options: any): any;
        static drop(options: any): any;
        static dropSchema(schema: any): any;
        static findAll(options: any): any;
        static findAndCountAll(options: any): any;
        static findByPk(param: any, options: any): any;
        static findCreateFind(options: any): any;
        static findOne(options: any): any;
        static findOrBuild(options: any, ...args: any[]): any;
        static findOrCreate(options: any, ...args: any[]): any;
        static getAssociationForAlias(target: any, alias: any): any;
        static getAssociations(target: any): any;
        static getTableName(): any;
        static hasAlias(alias: any): any;
        static hasHook(hookType: any): any;
        static hasHooks(hookType: any): any;
        static hasMany(target: any, options: any): any;
        static hasOne(target: any, options: any): any;
        static increment(fields: any, options: any): any;
        static init(attributes: any, options: any): any;
        static inspect(): any;
        static max(field: any, options: any): any;
        static min(field: any, options: any): any;
        static refreshAttributes(): void;
        static removeAttribute(attribute: any): void;
        static removeHook(hookType: any, name: any): any;
        static restore(options: any): any;
        static runHooks(hooks: any, hookArgs: any): any;
        static schema(schema: any, options: any): any;
        static scope(option: any, ...args: any[]): any;
        static sum(field: any, options: any): any;
        static sync(options: any): any;
        static truncate(options: any): any;
        static unscoped(): any;
        static update(values: any, options: any): any;
        static upsert(values: any, options: any): any;
        static validationFailed(name: any, callback: any): any;
        static warnOnInvalidOptions(options: any, validColumnNames: any): void;
        constructor(values: any, options: any);
        dataValues: any;
        isNewRecord: any;
        addHook(...args: any[]): any;
        changed(key: any, value: any): any;
        decrement(fields: any, options: any): any;
        destroy(options: any): any;
        equals(other: any): any;
        equalsOneOf(others: any): any;
        get(key: any, options: any): any;
        getDataValue(key: any): any;
        hasHook(...args: any[]): any;
        hasHooks(...args: any[]): any;
        increment(fields: any, options: any): any;
        isSoftDeleted(): any;
        previous(key: any): any;
        reload(options: any): any;
        removeHook(...args: any[]): any;
        restore(options: any): any;
        runHooks(...args: any[]): any;
        save(options: any, ...args: any[]): any;
        set(key: any, value: any, options: any): any;
        setAttributes(updates: any): any;
        setDataValue(key: any, value: any): void;
        setValidators(attribute: any, validators: any): void;
        toJSON(): any;
        update(values: any, options: any): any;
        validate(options: any): any;
        where(checkVersion: any): any;
    }
    namespace Model {
        namespace Mixin {
            // Circular reference from index.DataType.Model.Mixin
            const Mixin: any;
            function belongsTo(target: any, options: any): any;
            function belongsToMany(target: any, options: any): any;
            function getAssociationForAlias(target: any, alias: any): any;
            function getAssociations(target: any): any;
            function hasMany(target: any, options: any): any;
            function hasOne(target: any, options: any): any;
        }
    }
    class NOW {
        static extend(oldType: any): any;
        static key: string;
        static types: {};
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
    }
    class NUMBER {
        static UNSIGNED: any;
        static ZEROFILL: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {};
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class NUMERIC {
        static UNSIGNED: any;
        static ZEROFILL: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        constructor(p0: any, p1: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class OptimisticLockError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(options: any);
        name: any;
        modelName: any;
        values: any;
        where: any;
    }
    class Promise {
        static AggregateError(message: any): any;
        static CancellationError(message: any): any;
        static OperationalError(message: any): any;
        // Circular reference from index.DataType.Promise
        static Promise: any;
        static PromiseInspection(promise: any): void;
        static RejectionError(message: any): any;
        static TimeoutError(message: any): any;
        static all(promises: any): any;
        static any(promises: any): any;
        static attempt(fn: any, ...args: any[]): any;
        static bind(thisArg: any, value: any): any;
        static cast(obj: any): any;
        static config(opts: any): any;
        static defer(): any;
        static delay(ms: any, value: any): any;
        static each(promises: any, fn: any): any;
        static filter(promises: any, fn: any, options: any): any;
        static fromCallback(fn: any, ...args: any[]): any;
        static fromNode(fn: any, ...args: any[]): any;
        static fulfilled(obj: any): any;
        static getNewLibraryCopy(): any;
        static hasLongStackTraces(): any;
        static is(val: any): any;
        static join(...args: any[]): any;
        static longStackTraces(): void;
        static map(promises: any, fn: any, options: any, _filter: any): any;
        static mapSeries(promises: any, fn: any): any;
        static method(fn: any): any;
        static onPossiblyUnhandledRejection(fn: any): void;
        static onUnhandledRejectionHandled(fn: any): void;
        static pending(): any;
        static promisify(fn: any, options: any): any;
        static promisifyAll(target: any, options: any): any;
        static props(promises: any): any;
        static race(promises: any): any;
        static reduce(promises: any, fn: any, initialValue: any, _each: any): any;
        static reject(reason: any): any;
        static rejected(reason: any): any;
        static resolve(obj: any): any;
        static setScheduler(fn: any): any;
        static settle(promises: any): any;
        static some(promises: any, howMany: any): any;
        static spawn(generatorFunction: any): any;
        static using(...args: any[]): any;
        static version: string;
        constructor(executor: any);
        all(...args: any[]): any;
        any(): any;
        asCallback(nodeback: any, options: any): any;
        bind(thisArg: any): any;
        call(methodName: any, ...args: any[]): any;
        cancel(): any;
        catchReturn(value: any, ...args: any[]): any;
        catchThrow(reason: any, ...args: any[]): any;
        caught(fn: any, ...args: any[]): any;
        delay(ms: any): any;
        disposer(fn: any): any;
        done(didFulfill: any, didReject: any): void;
        each(fn: any): any;
        error(fn: any): any;
        filter(fn: any, options: any): any;
        get(propertyName: any): any;
        isCancellable(): any;
        isCancelled(): any;
        isFulfilled(): any;
        isPending(): any;
        isRejected(): any;
        isResolved(): any;
        lastly(handler: any): any;
        map(fn: any, options: any): any;
        mapSeries(fn: any): any;
        nodeify(nodeback: any, options: any): any;
        props(): any;
        race(): any;
        reason(): any;
        reduce(fn: any, initialValue: any): any;
        reflect(): any;
        settle(): any;
        some(howMany: any): any;
        spread(fn: any): any;
        suppressUnhandledRejections(): void;
        tap(handler: any): any;
        tapCatch(handlerOrPredicate: any, ...args: any[]): any;
        then(didFulfill: any, didReject: any, ...args: any[]): any;
        thenReturn(value: any): any;
        thenThrow(reason: any): any;
        timeout(ms: any, message: any): any;
        toJSON(): any;
        value(): any;
    }
    namespace Promise {
        function RangeError(p0: any): any;
        namespace RangeError {
            function captureStackTrace(p0: any, p1: any): any;
            const stackTraceLimit: number;
        }
        function TypeError(p0: any): any;
        namespace TypeError {
            function captureStackTrace(p0: any, p1: any): any;
            const stackTraceLimit: number;
        }
        function coroutine(generatorFunction: any, options: any): any;
        namespace coroutine {
            function addYieldHandler(fn: any): void;
        }
    }
    class QueryError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(message: any);
        name: any;
    }
    class RANGE {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            postgres: {
                castTypes: any;
                subtypes: any;
            };
        };
        static warn(link: any, text: any): void;
        constructor(p0: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class REAL {
        static UNSIGNED: any;
        static ZEROFILL: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        constructor(p0: any, p1: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class SMALLINT {
        static UNSIGNED: any;
        static ZEROFILL: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class STRING {
        static BINARY: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        constructor(p0: any, p1: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class SequelizeScopeError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(parent: any);
        name: any;
    }
    class TEXT {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: boolean;
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        constructor(p0: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class TIME {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
    }
    class TINYINT {
        static UNSIGNED: any;
        static ZEROFILL: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class TimeoutError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(parent: any);
        name: any;
    }
    class Transaction {
        static ISOLATION_LEVELS: any;
        static LOCK: any;
        static TYPES: any;
        // Circular reference from index.DataType.Transaction
        static Transaction: any;
        constructor(sequelize: any, options: any);
        sequelize: any;
        savepoints: any;
        options: any;
        parent: any;
        id: any;
        name: any;
        afterCommit(fn: any): void;
        begin(): any;
        cleanup(): any;
        commit(): any;
        prepareEnvironment(useCLS: any): any;
        rollback(): any;
        setDeferrable(): any;
        setIsolationLevel(): any;
    }
    class UUID {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: boolean;
            mssql: boolean;
            mysql: boolean;
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any, options: any): any;
    }
    class UUIDV1 {
        static extend(oldType: any): any;
        static key: string;
        static types: {};
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any, options: any): any;
    }
    class UUIDV4 {
        static extend(oldType: any): any;
        static key: string;
        static types: {};
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any, options: any): any;
    }
    class UniqueConstraintError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(options: any);
        name: any;
        errors: any;
        fields: any;
        parent: any;
        original: any;
        sql: any;
        get(path: any): any;
    }
    namespace UniqueConstraintError {
        class ValidationErrorItem {
            static Origins: {
                CORE: any;
                DB: any;
                FUNCTION: any;
            };
            static TypeStringMap: {
                "notnull violation": any;
                "string violation": any;
                "unique violation": any;
                "validation error": any;
            };
            constructor(message: any, type: any, path: any, value: any, inst: any, validatorKey: any, fnName: any, fnArgs: any);
            message: any;
            type: any;
            path: any;
            value: any;
            origin: any;
            instance: any;
            validatorKey: any;
            validatorName: any;
            validatorArgs: any;
            getValidatorKey(useTypeAsNS: any, NSSeparator: any): any;
        }
    }
    class UnknownConstraintError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(options: any);
        name: any;
        message: any;
        constraint: any;
        fields: any;
        table: any;
    }
    namespace Utils {
        class Cast {
            constructor(val: any, type: any, json: any);
            val: any;
            type: any;
            json: any;
        }
        class Col {
            constructor(col: any, args: any);
            col: any;
        }
        class Fn {
            constructor(fn: any, args: any);
            fn: any;
            args: any;
            clone(): any;
        }
        class Json {
            constructor(conditionsOrPath: any, value: any);
            conditions: any;
            path: any;
            value: any;
        }
        class Literal {
            constructor(val: any);
            val: any;
        }
        class Promise {
            static AggregateError(message: any): any;
            static CancellationError(message: any): any;
            static OperationalError(message: any): any;
            // Circular reference from index.DataType.Utils.Promise
            static Promise: any;
            static PromiseInspection(promise: any): void;
            static RejectionError(message: any): any;
            static TimeoutError(message: any): any;
            static all(promises: any): any;
            static any(promises: any): any;
            static attempt(fn: any, ...args: any[]): any;
            static bind(thisArg: any, value: any): any;
            static cast(obj: any): any;
            static config(opts: any): any;
            static defer(): any;
            static delay(ms: any, value: any): any;
            static each(promises: any, fn: any): any;
            static filter(promises: any, fn: any, options: any): any;
            static fromCallback(fn: any, ...args: any[]): any;
            static fromNode(fn: any, ...args: any[]): any;
            static fulfilled(obj: any): any;
            static getNewLibraryCopy(): any;
            static hasLongStackTraces(): any;
            static is(val: any): any;
            static join(...args: any[]): any;
            static longStackTraces(): void;
            static map(promises: any, fn: any, options: any, _filter: any): any;
            static mapSeries(promises: any, fn: any): any;
            static method(fn: any): any;
            static onPossiblyUnhandledRejection(fn: any): void;
            static onUnhandledRejectionHandled(fn: any): void;
            static pending(): any;
            static promisify(fn: any, options: any): any;
            static promisifyAll(target: any, options: any): any;
            static props(promises: any): any;
            static race(promises: any): any;
            static reduce(promises: any, fn: any, initialValue: any, _each: any): any;
            static reject(reason: any): any;
            static rejected(reason: any): any;
            static resolve(obj: any): any;
            static setScheduler(fn: any): any;
            static settle(promises: any): any;
            static some(promises: any, howMany: any): any;
            static spawn(generatorFunction: any): any;
            static using(...args: any[]): any;
            static version: string;
            constructor(executor: any);
            all(...args: any[]): any;
            any(): any;
            asCallback(nodeback: any, options: any): any;
            bind(thisArg: any): any;
            call(methodName: any, ...args: any[]): any;
            cancel(): any;
            catchReturn(value: any, ...args: any[]): any;
            catchThrow(reason: any, ...args: any[]): any;
            caught(fn: any, ...args: any[]): any;
            delay(ms: any): any;
            disposer(fn: any): any;
            done(didFulfill: any, didReject: any): void;
            each(fn: any): any;
            error(fn: any): any;
            filter(fn: any, options: any): any;
            get(propertyName: any): any;
            isCancellable(): any;
            isCancelled(): any;
            isFulfilled(): any;
            isPending(): any;
            isRejected(): any;
            isResolved(): any;
            lastly(handler: any): any;
            map(fn: any, options: any): any;
            mapSeries(fn: any): any;
            nodeify(nodeback: any, options: any): any;
            props(): any;
            race(): any;
            reason(): any;
            reduce(fn: any, initialValue: any): any;
            reflect(): any;
            settle(): any;
            some(howMany: any): any;
            spread(fn: any): any;
            suppressUnhandledRejections(): void;
            tap(handler: any): any;
            tapCatch(handlerOrPredicate: any, ...args: any[]): any;
            then(didFulfill: any, didReject: any, ...args: any[]): any;
            thenReturn(value: any): any;
            thenThrow(reason: any): any;
            timeout(ms: any, message: any): any;
            toJSON(): any;
            value(): any;
        }
        namespace Promise {
            function RangeError(p0: any): any;
            namespace RangeError {
                // Too-deep object hierarchy from index.DataType.Utils.Promise.RangeError
                const captureStackTrace: any;
                // Too-deep object hierarchy from index.DataType.Utils.Promise.RangeError
                const stackTraceLimit: any;
            }
            function TypeError(p0: any): any;
            namespace TypeError {
                // Too-deep object hierarchy from index.DataType.Utils.Promise.TypeError
                const captureStackTrace: any;
                // Too-deep object hierarchy from index.DataType.Utils.Promise.TypeError
                const stackTraceLimit: any;
            }
            function coroutine(generatorFunction: any, options: any): any;
            namespace coroutine {
                // Too-deep object hierarchy from index.DataType.Utils.Promise.coroutine
                const addYieldHandler: any;
            }
        }
        class SequelizeMethod {
        }
        const TICK_CHAR: string;
        class Where {
            constructor(attribute: any, comparator: any, logic: any);
            attribute: any;
            comparator: any;
            logic: any;
        }
        function addTicks(s: any, tickChar: any): any;
        function camelize(str: any): any;
        function camelizeIf(str: any, condition: any): any;
        function camelizeObjectKeys(obj: any): any;
        function canTreatArrayAsAnd(arr: any): any;
        function classToInvokable(Class: any): any;
        function cloneDeep(obj: any): any;
        function combineTableNames(tableName1: any, tableName2: any): any;
        function defaultValueSchemable(value: any): any;
        function defaults(object: any, sources: any): any;
        function flattenObjectDeep(value: any): any;
        function format(arr: any, dialect: any): any;
        function formatNamedParameters(sql: any, parameters: any, dialect: any): any;
        function generateEnumName(tableName: any, columnName: any): any;
        function getComplexKeys(obj: any): any;
        function getComplexSize(obj: any): any;
        function getOperators(obj: any): any;
        function intersects(arr1: any, arr2: any): any;
        function isColString(value: any): any;
        function isPrimitive(val: any): any;
        function isWhereEmpty(obj: any): any;
        function mapFinderOptions(options: any, Model: any): any;
        function mapOptionFieldNames(options: any, Model: any): any;
        function mapValueFieldNames(dataValues: any, fields: any, Model: any): any;
        function mapWhereFieldNames(attributes: any, Model: any): any;
        function merge(...args: any[]): any;
        function mergeDefaults(a: any, b: any): any;
        function nameIndex(index: any, tableName: any): any;
        function now(dialect: any): any;
        function pluralize(str: any): any;
        function removeNullValuesFromHash(hash: any, omitNull: any, options: any): any;
        function removeTicks(s: any, tickChar: any): any;
        function singularize(str: any): any;
        function spliceStr(str: any, index: any, count: any, add: any): any;
        function stack(): any;
        function toDefaultValue(value: any, dialect: any): any;
        function underscore(str: any): any;
        function underscoredIf(str: any, condition: any): any;
        function useInflection(_inflection: any): void;
    }
    class VIRTUAL {
        static extend(oldType: any): any;
        static key: string;
        static types: {};
        static warn(link: any, text: any): void;
        constructor(p0: any, p1: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
    }
    class ValidationError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(message: any, errors: any);
        name: any;
        message: any;
        errors: any;
        get(path: any): any;
    }
    namespace ValidationError {
        class ValidationErrorItem {
            static Origins: {
                CORE: any;
                DB: any;
                FUNCTION: any;
            };
            static TypeStringMap: {
                "notnull violation": any;
                "string violation": any;
                "unique violation": any;
                "validation error": any;
            };
            constructor(message: any, type: any, path: any, value: any, inst: any, validatorKey: any, fnName: any, fnArgs: any);
            message: any;
            type: any;
            path: any;
            value: any;
            origin: any;
            instance: any;
            validatorKey: any;
            validatorName: any;
            validatorArgs: any;
            getValidatorKey(useTypeAsNS: any, NSSeparator: any): any;
        }
    }
    class ValidationErrorItem {
        static Origins: {
            CORE: string;
            DB: string;
            FUNCTION: string;
        };
        static TypeStringMap: {
            "notnull violation": string;
            "string violation": string;
            "unique violation": string;
            "validation error": string;
        };
        constructor(message: any, type: any, path: any, value: any, inst: any, validatorKey: any, fnName: any, fnArgs: any);
        message: any;
        type: any;
        path: any;
        value: any;
        origin: any;
        instance: any;
        validatorKey: any;
        validatorName: any;
        validatorArgs: any;
        getValidatorKey(useTypeAsNS: any, NSSeparator: any): any;
    }
    namespace Validator {
        function blacklist(str: any, chars: any): any;
        function contains(str: any, elem: any): any;
        function equals(str: any, comparison: any): any;
        function escape(str: any): any;
        function extend(name: any, fn: any): any;
        function is(str: any, pattern: any, modifiers: any): any;
        function isAfter(str: any, ...args: any[]): any;
        function isAlpha(str: any, ...args: any[]): any;
        const isAlphaLocales: string[];
        function isAlphanumeric(str: any, ...args: any[]): any;
        const isAlphanumericLocales: string[];
        function isAscii(str: any): any;
        function isBase64(str: any): any;
        function isBefore(str: any, ...args: any[]): any;
        function isBoolean(str: any): any;
        function isByteLength(str: any, options: any, ...args: any[]): any;
        function isCreditCard(str: any): any;
        function isCurrency(str: any, options: any): any;
        function isDataURI(str: any): any;
        function isDate(dateString: any): any;
        function isDecimal(str: any): any;
        function isDivisibleBy(str: any, num: any): any;
        function isEmail(str: any, options: any): any;
        function isEmpty(str: any, options: any): any;
        function isFQDN(str: any, options: any): any;
        function isFloat(str: any, options: any): any;
        const isFloatLocales: string[];
        function isFullWidth(str: any): any;
        function isHalfWidth(str: any): any;
        function isHash(str: any, algorithm: any): any;
        function isHexColor(str: any): any;
        function isHexadecimal(str: any): any;
        function isIP(str: any, ...args: any[]): any;
        function isIPRange(str: any): any;
        function isIPv4(str: any): any;
        function isIPv6(str: any): any;
        function isISBN(str: any, ...args: any[]): any;
        function isISIN(str: any): any;
        function isISO31661Alpha2(str: any): any;
        function isISO31661Alpha3(str: any): any;
        function isISO8601(str: any, options: any): any;
        function isISRC(str: any): any;
        function isISSN(str: any, ...args: any[]): any;
        function isIdentityCard(str: any, ...args: any[]): any;
        function isImmutable(value: any, validatorArgs: any, field: any, modelInstance: any): any;
        function isIn(str: any, options: any): any;
        function isInt(str: any, options: any): any;
        function isJSON(str: any): any;
        function isJWT(str: any): any;
        function isLatLong(str: any): any;
        function isLength(str: any, options: any, ...args: any[]): any;
        function isLowercase(str: any): any;
        function isMACAddress(str: any, options: any): any;
        function isMD5(str: any): any;
        function isMagnetURI(url: any): any;
        function isMimeType(str: any): any;
        function isMobilePhone(str: any, locale: any, options: any): any;
        const isMobilePhoneLocales: string[];
        function isMongoId(str: any): any;
        function isMultibyte(str: any): any;
        function isNull(str: any, options: any): any;
        function isNumeric(str: any, options: any): any;
        function isPort(str: any): any;
        function isPostalCode(str: any, locale: any): any;
        const isPostalCodeLocales: string[];
        function isRFC3339(str: any): any;
        function isSurrogatePair(str: any): any;
        function isURL(url: any, options: any): any;
        function isUUID(str: any, ...args: any[]): any;
        function isUppercase(str: any): any;
        function isUrl(str: any): any;
        function isVariableWidth(str: any): any;
        function isWhitelisted(str: any, chars: any): any;
        function len(str: any, min: any, max: any): any;
        function ltrim(str: any, chars: any): any;
        function matches(str: any, pattern: any, modifiers: any): any;
        function max(str: any, val: any): any;
        function min(str: any, val: any): any;
        function normalizeEmail(email: any, options: any): any;
        function not(str: any, pattern: any, modifiers: any): any;
        function notContains(str: any, elem: any): any;
        function notEmpty(str: any): any;
        function notIn(str: any, values: any): any;
        function notNull(val: any): any;
        function notRegex(str: any, pattern: any, modifiers: any): any;
        function regex(str: any, pattern: any, modifiers: any): any;
        function rtrim(str: any, chars: any): any;
        function stripLow(str: any, keep_new_lines: any): any;
        function toBoolean(str: any, strict: any): any;
        function toDate(date: any): any;
        function toFloat(str: any): any;
        function toInt(str: any, radix: any): any;
        function toString(input: any): any;
        function trim(str: any, chars: any): any;
        function unescape(str: any): any;
        const version: string;
        function whitelist(str: any, chars: any): any;
    }
    namespace mariadb {
        class DATE {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any, options: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DATEONLY {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class DECIMAL {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class ENUM {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(options: any): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class GEOMETRY {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class JSON {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(): any;
        }
        class UUID {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any, options: any): any;
        }
    }
    namespace mssql {
        class BIGINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class BLOB {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class BOOLEAN {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DATE {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DATEONLY {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class ENUM {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class FLOAT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class INTEGER {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class NOW {
            static extend(oldType: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class REAL {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class SMALLINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class STRING {
            static BINARY: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class TEXT {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class TINYINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class UUID {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any, options: any): any;
        }
    }
    namespace mysql {
        class DATE {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any, options: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DATEONLY {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class DECIMAL {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class ENUM {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(options: any): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class GEOMETRY {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class JSON {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(): any;
        }
        class UUID {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any, options: any): any;
        }
    }
    namespace postgres {
        class BIGINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class BLOB {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class BOOLEAN {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class CHAR {
            static BINARY: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class CITEXT {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DATE {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DATEONLY {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class DECIMAL {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class ENUM {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class FLOAT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class GEOGRAPHY {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class GEOMETRY {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class HSTORE {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class INTEGER {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class RANGE {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any, options: any): any;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toCastType(): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class REAL {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class SMALLINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class STRING {
            static BINARY: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class TEXT {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class TINYINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
    }
    namespace sqlite {
        class BIGINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class CHAR {
            static BINARY: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class CITEXT {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DATE {
            static extend(oldType: any): any;
            static key: string;
            static parse(date: any, options: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DATEONLY {
            static extend(oldType: any): any;
            static key: string;
            static parse(date: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class ENUM {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class FLOAT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class INTEGER {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class JSON {
            static extend(oldType: any): any;
            static key: string;
            static parse(data: any): any;
            static types: {
                mariadb: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(): any;
        }
        class MEDIUMINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class NUMBER {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class REAL {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class SMALLINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class STRING {
            static BINARY: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class TEXT {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class TINYINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
    }
}
export function Default(value: any): any;
export function DefaultScope(scope: any): any;
export function DeletedAt(target: any, propertyName: any): void;
export function Equals(value: any): any;
export function ForeignKey(relatedClassGetter: any): any;
export function HasMany(associatedClassGetter: any, optionsOrForeignKey: any): any;
export function HasOne(associatedClassGetter: any, optionsOrForeignKey: any): any;
export function Is(...args: any[]): any;
export function IsAfter(date: any): any;
export function IsAlpha(target: any, propertyName: any): void;
export function IsAlphanumeric(target: any, propertyName: any): void;
export function IsArray(target: any, propertyName: any): void;
export function IsBefore(date: any): any;
export function IsCreditCard(target: any, propertyName: any): void;
export function IsDate(target: any, propertyName: any): void;
export function IsDecimal(target: any, propertyName: any): void;
export function IsEmail(target: any, propertyName: any): void;
export function IsFloat(target: any, propertyName: any): void;
export function IsIP(target: any, propertyName: any): void;
export function IsIPv4(target: any, propertyName: any): void;
export function IsIPv6(target: any, propertyName: any): void;
export function IsIn(arg: any): any;
export function IsInt(target: any, propertyName: any): void;
export function IsLowercase(target: any, propertyName: any): void;
export function IsNull(target: any, propertyName: any): void;
export function IsNumeric(target: any, propertyName: any): void;
export function IsUUID(version: any): any;
export function IsUppercase(target: any, propertyName: any): void;
export function IsUrl(target: any, propertyName: any): void;
export function Length(_a: any): any;
export function Max(limit: any): any;
export function Min(limit: any): any;
export class Model {
    static QueryGenerator: any;
    static QueryInterface: any;
    static addHook(...args: any[]): any;
    static addScope(...args: any[]): any;
    static afterAssociate(...args: any[]): any;
    static afterBulkCreate(...args: any[]): any;
    static afterBulkDestroy(...args: any[]): any;
    static afterBulkRestore(...args: any[]): any;
    static afterBulkSync(...args: any[]): any;
    static afterBulkUpdate(...args: any[]): any;
    static afterCreate(...args: any[]): any;
    static afterDestroy(...args: any[]): any;
    static afterFind(...args: any[]): any;
    static afterRestore(...args: any[]): any;
    static afterSave(...args: any[]): any;
    static afterSync(...args: any[]): any;
    static afterUpdate(...args: any[]): any;
    static afterUpsert(...args: any[]): any;
    static afterValidate(...args: any[]): any;
    static aggregate(...args: any[]): any;
    static beforeAssociate(...args: any[]): any;
    static beforeBulkCreate(...args: any[]): any;
    static beforeBulkDestroy(...args: any[]): any;
    static beforeBulkRestore(...args: any[]): any;
    static beforeBulkSync(...args: any[]): any;
    static beforeBulkUpdate(...args: any[]): any;
    static beforeCount(...args: any[]): any;
    static beforeCreate(...args: any[]): any;
    static beforeDestroy(...args: any[]): any;
    static beforeFind(...args: any[]): any;
    static beforeFindAfterExpandIncludeAll(...args: any[]): any;
    static beforeFindAfterOptions(...args: any[]): any;
    static beforeRestore(...args: any[]): any;
    static beforeSave(...args: any[]): any;
    static beforeSync(...args: any[]): any;
    static beforeUpdate(...args: any[]): any;
    static beforeUpsert(...args: any[]): any;
    static beforeValidate(...args: any[]): any;
    static belongsTo(...args: any[]): any;
    static belongsToMany(...args: any[]): any;
    static bind(...args: any[]): any;
    static build(...args: any[]): any;
    static bulkBuild(...args: any[]): any;
    static bulkCreate(...args: any[]): any;
    static call(...args: any[]): any;
    static count(...args: any[]): any;
    static create(...args: any[]): any;
    static decrement(...args: any[]): any;
    static describe(...args: any[]): any;
    static destroy(...args: any[]): any;
    static drop(...args: any[]): any;
    static dropSchema(...args: any[]): any;
    static extend(...args: any[]): any;
    static findAll(...args: any[]): any;
    static findAndCountAll(...args: any[]): any;
    static findByPk(...args: any[]): any;
    static findCreateFind(...args: any[]): any;
    static findOne(...args: any[]): any;
    static findOrBuild(...args: any[]): any;
    static findOrCreate(...args: any[]): any;
    static getAssociationForAlias(...args: any[]): any;
    static getAssociations(...args: any[]): any;
    static getTableName(...args: any[]): any;
    static hasAlias(...args: any[]): any;
    static hasHook(...args: any[]): any;
    static hasHooks(...args: any[]): any;
    static hasMany(...args: any[]): any;
    static hasOne(...args: any[]): any;
    static increment(...args: any[]): any;
    static init(attributes: any, options: any): any;
    static inspect(...args: any[]): any;
    static isInitialized: boolean;
    static max(...args: any[]): any;
    static min(...args: any[]): any;
    static prepareInstantiationOptions(...args: any[]): any;
    static refreshAttributes(): void;
    static removeAttribute(...args: any[]): any;
    static removeHook(...args: any[]): any;
    static restore(...args: any[]): any;
    static runHooks(...args: any[]): any;
    static schema(...args: any[]): any;
    static scope(...args: any[]): any;
    static sum(...args: any[]): any;
    static sync(...args: any[]): any;
    static truncate(...args: any[]): any;
    static unscoped(...args: any[]): any;
    static update(...args: any[]): any;
    static upsert(...args: any[]): any;
    static validationFailed(...args: any[]): any;
    static warnOnInvalidOptions(...args: any[]): any;
    constructor(values: any, options: any);
    $add(propertyKey: any, instances: any, options: any): any;
    $count(propertyKey: any, options: any): any;
    $create(propertyKey: any, values: any, options: any): any;
    $get(propertyKey: any, options: any): any;
    $has(propertyKey: any, instances: any, options: any): any;
    $remove(propertyKey: any, instances: any, options: any): any;
    $set(propertyKey: any, instances: any, options: any): any;
    addHook(...args: any[]): any;
    changed(key: any, value: any): any;
    decrement(fields: any, options: any): any;
    destroy(options: any): any;
    equals(other: any): any;
    equalsOneOf(others: any): any;
    get(key: any, options: any): any;
    getDataValue(key: any): any;
    hasHook(...args: any[]): any;
    hasHooks(...args: any[]): any;
    increment(fields: any, options: any): any;
    isSoftDeleted(): any;
    previous(key: any): any;
    reload(options: any): any;
    removeHook(...args: any[]): any;
    restore(options: any): any;
    runHooks(...args: any[]): any;
    save(options: any, ...args: any[]): any;
    set(key: any, value: any, options: any): any;
    setAttributes(updates: any): any;
    setDataValue(key: any, value: any): void;
    setValidators(attribute: any, validators: any): void;
    toJSON(): any;
    update(values: any, options: any): any;
    validate(options: any): any;
    where(checkVersion: any): any;
}
export namespace Model {
    namespace Mixin {
        // Circular reference from index.Model.Mixin
        const Mixin: any;
        function belongsTo(target: any, options: any): any;
        function belongsToMany(target: any, options: any): any;
        function getAssociationForAlias(target: any, alias: any): any;
        function getAssociations(target: any): any;
        function hasMany(target: any, options: any): any;
        function hasOne(target: any, options: any): any;
    }
}
export function Not(arg: any): any;
export function NotContains(value: any): any;
export function NotEmpty(...args: any[]): any;
export function NotIn(arg: any): any;
export function NotNull(target: any, propertyName: any): void;
export function PrimaryKey(target: any, propertyName: any): void;
export function Scopes(scopes: any): any;
export class Sequelize {
    static IndexHints: {
        FORCE: string;
        IGNORE: string;
        USE: string;
    };
    static Op: {
        adjacent: symbol;
        all: symbol;
        and: symbol;
        any: symbol;
        between: symbol;
        col: symbol;
        contained: symbol;
        contains: symbol;
        endsWith: symbol;
        eq: symbol;
        gt: symbol;
        gte: symbol;
        iLike: symbol;
        iRegexp: symbol;
        in: symbol;
        is: symbol;
        join: symbol;
        like: symbol;
        lt: symbol;
        lte: symbol;
        ne: symbol;
        noExtendLeft: symbol;
        noExtendRight: symbol;
        not: symbol;
        notBetween: symbol;
        notILike: symbol;
        notIRegexp: symbol;
        notIn: symbol;
        notLike: symbol;
        notRegexp: symbol;
        or: symbol;
        overlap: symbol;
        placeholder: symbol;
        regexp: symbol;
        startsWith: symbol;
        strictLeft: symbol;
        strictRight: symbol;
        substring: symbol;
        values: symbol;
    };
    static QueryTypes: {
        BULKDELETE: string;
        BULKUPDATE: string;
        DELETE: string;
        DESCRIBE: string;
        FOREIGNKEYS: string;
        INSERT: string;
        RAW: string;
        SELECT: string;
        SHOWCONSTRAINTS: string;
        SHOWINDEXES: string;
        SHOWTABLES: string;
        UPDATE: string;
        UPSERT: string;
        VERSION: string;
    };
    static TableHints: {
        NOEXPAND: string;
        NOLOCK: string;
        NOWAIT: string;
        PAGLOCK: string;
        READCOMMITTED: string;
        READPAST: string;
        READUNCOMMITTED: string;
        REPEATABLEREAD: string;
        ROWLOCK: string;
        SERIALIZABLE: string;
        SNAPSHOT: string;
        TABLOCK: string;
        TABLOCKX: string;
        UPDLOCK: string;
        XLOCK: string;
    };
    static addHook(hookType: any, name: any, fn: any): any;
    static afterAssociate(name: any, callback: any): any;
    static afterBulkCreate(name: any, callback: any): any;
    static afterBulkDestroy(name: any, callback: any): any;
    static afterBulkRestore(name: any, callback: any): any;
    static afterBulkSync(name: any, callback: any): any;
    static afterBulkUpdate(name: any, callback: any): any;
    static afterConnect(name: any, callback: any): any;
    static afterCreate(name: any, callback: any): any;
    static afterDefine(name: any, callback: any): any;
    static afterDestroy(name: any, callback: any): any;
    static afterFind(name: any, callback: any): any;
    static afterInit(name: any, callback: any): any;
    static afterRestore(name: any, callback: any): any;
    static afterSave(name: any, callback: any): any;
    static afterSync(name: any, callback: any): any;
    static afterUpdate(name: any, callback: any): any;
    static afterUpsert(name: any, callback: any): any;
    static afterValidate(name: any, callback: any): any;
    static and(args: any): any;
    static beforeAssociate(name: any, callback: any): any;
    static beforeBulkCreate(name: any, callback: any): any;
    static beforeBulkDestroy(name: any, callback: any): any;
    static beforeBulkRestore(name: any, callback: any): any;
    static beforeBulkSync(name: any, callback: any): any;
    static beforeBulkUpdate(name: any, callback: any): any;
    static beforeConnect(name: any, callback: any): any;
    static beforeCount(name: any, callback: any): any;
    static beforeCreate(name: any, callback: any): any;
    static beforeDefine(name: any, callback: any): any;
    static beforeDestroy(name: any, callback: any): any;
    static beforeFind(name: any, callback: any): any;
    static beforeFindAfterExpandIncludeAll(name: any, callback: any): any;
    static beforeFindAfterOptions(name: any, callback: any): any;
    static beforeInit(name: any, callback: any): any;
    static beforeRestore(name: any, callback: any): any;
    static beforeSave(name: any, callback: any): any;
    static beforeSync(name: any, callback: any): any;
    static beforeUpdate(name: any, callback: any): any;
    static beforeUpsert(name: any, callback: any): any;
    static beforeValidate(name: any, callback: any): any;
    static cast(val: any, type: any): any;
    static col(col: any): any;
    static extend(target: any): void;
    static fn(fn: any, args: any): any;
    static getValidationOnlyConfig(config: any): any;
    static hasHook(hookType: any): any;
    static hasHooks(hookType: any): any;
    static isISequelizeDbNameConfig(obj: any): any;
    static isISequelizeUriConfig(obj: any): any;
    static json(conditionsOrPath: any, value: any): any;
    static literal(val: any): any;
    static options: {
        hooks: {};
    };
    static or(args: any): any;
    static prepareConfig(config: any): any;
    static removeHook(hookType: any, name: any): any;
    static runHooks(hooks: any, hookArgs: any): any;
    static useCLS(ns: any): any;
    static useInflection(_inflection: any): void;
    static validationFailed(name: any, callback: any): any;
    static version: string;
    static where(attr: any, comparator: any, logic: any): any;
    constructor(config: any);
    throughMap: any;
    addHook(hookType: any, name: any, fn: any): any;
    addModels(arg: any, modelMatch: any): void;
    adjustAssociation(model: any, association: any): void;
    afterAssociate(name: any, callback: any): any;
    afterBulkCreate(name: any, callback: any): any;
    afterBulkDestroy(name: any, callback: any): any;
    afterBulkRestore(name: any, callback: any): any;
    afterBulkSync(name: any, callback: any): any;
    afterBulkUpdate(name: any, callback: any): any;
    afterConnect(name: any, callback: any): any;
    afterCreate(name: any, callback: any): any;
    afterDefine(name: any, callback: any): any;
    afterDestroy(name: any, callback: any): any;
    afterFind(name: any, callback: any): any;
    afterInit(name: any, callback: any): any;
    afterRestore(name: any, callback: any): any;
    afterSave(name: any, callback: any): any;
    afterSync(name: any, callback: any): any;
    afterUpdate(name: any, callback: any): any;
    afterUpsert(name: any, callback: any): any;
    afterValidate(name: any, callback: any): any;
    and(args: any): any;
    associateModels(models: any): void;
    authenticate(options: any): any;
    beforeAssociate(name: any, callback: any): any;
    beforeBulkCreate(name: any, callback: any): any;
    beforeBulkDestroy(name: any, callback: any): any;
    beforeBulkRestore(name: any, callback: any): any;
    beforeBulkSync(name: any, callback: any): any;
    beforeBulkUpdate(name: any, callback: any): any;
    beforeConnect(name: any, callback: any): any;
    beforeCount(name: any, callback: any): any;
    beforeCreate(name: any, callback: any): any;
    beforeDefine(name: any, callback: any): any;
    beforeDestroy(name: any, callback: any): any;
    beforeFind(name: any, callback: any): any;
    beforeFindAfterExpandIncludeAll(name: any, callback: any): any;
    beforeFindAfterOptions(name: any, callback: any): any;
    beforeInit(name: any, callback: any): any;
    beforeRestore(name: any, callback: any): any;
    beforeSave(name: any, callback: any): any;
    beforeSync(name: any, callback: any): any;
    beforeUpdate(name: any, callback: any): any;
    beforeUpsert(name: any, callback: any): any;
    beforeValidate(name: any, callback: any): any;
    cast(val: any, type: any): any;
    close(): any;
    col(col: any): any;
    createSchema(schema: any, options: any): any;
    databaseVersion(options: any): any;
    define(modelName: any, attributes: any, options: any): any;
    defineModels(models: any): void;
    drop(options: any): any;
    dropAllSchemas(options: any): any;
    dropSchema(schema: any, options: any): any;
    escape(value: any): any;
    fn(fn: any, args: any): any;
    getDatabaseName(): any;
    getDialect(): any;
    getQueryInterface(): any;
    getThroughModel(through: any): any;
    hasHook(hookType: any): any;
    hasHooks(hookType: any): any;
    init(config: any): void;
    isDefined(modelName: any): any;
    json(conditionsOrPath: any, value: any): any;
    literal(val: any): any;
    log(args: any): void;
    model(modelName: any): any;
    normalizeAttribute(attribute: any): any;
    normalizeDataType(Type: any): any;
    or(args: any): any;
    query(sql: any, options: any): any;
    random(): any;
    refreshTypes(): void;
    removeHook(hookType: any, name: any): any;
    runHooks(hooks: any, hookArgs: any): any;
    set(variables: any, options: any): any;
    showAllSchemas(options: any): any;
    sync(options: any): any;
    transaction(options: any, autoCallback: any): any;
    truncate(options: any): any;
    validate(options: any): any;
    validationFailed(name: any, callback: any): any;
    where(attr: any, comparator: any, logic: any): any;
}
export namespace Sequelize {
    class ABSTRACT {
        static extend(oldType: any): any;
        static key: string;
        static types: {};
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
    }
    class ARRAY {
        static extend(oldType: any): any;
        static is(obj: any, type: any): any;
        static key: string;
        static types: {};
        static warn(link: any, text: any): void;
        constructor(p0: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class AccessDeniedError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(parent: any);
        name: any;
    }
    class Association {
        // Circular reference from index.Sequelize.Association
        static Association: any;
        constructor(source: any, target: any, options: any);
        source: any;
        target: any;
        options: any;
        scope: any;
        isSelfAssociation: any;
        as: any;
        associationType: any;
        inspect(): any;
        toInstanceArray(input: any): any;
    }
    namespace Association {
        class BelongsTo {
            // Circular reference from index.Sequelize.Association.BelongsTo
            static Association: any;
            // Circular reference from index.Sequelize.Association.BelongsTo
            static BelongsTo: any;
            constructor(source: any, target: any, options: any);
            associationType: any;
            isSingleAssociation: any;
            foreignKeyAttribute: any;
            isAliased: any;
            as: any;
            foreignKey: any;
            identifier: any;
            identifierField: any;
            targetKey: any;
            targetKeyField: any;
            targetKeyIsPrimary: any;
            targetIdentifier: any;
            associationAccessor: any;
            accessors: any;
            create(sourceInstance: any, values: any, options: any): any;
            get(instances: any, options: any): any;
            inspect(): any;
            mixin(obj: any): void;
            set(sourceInstance: any, associatedInstance: any, options: any): any;
            toInstanceArray(input: any): any;
            verifyAssociationAlias(alias: any): any;
        }
        namespace BelongsTo {
            class BelongsToMany {
                // Circular reference from index.Sequelize.Association.BelongsTo.BelongsToMany
                static Association: any;
                // Circular reference from index.Sequelize.Association.BelongsTo.BelongsToMany
                static BelongsTo: any;
                // Circular reference from index.Sequelize.Association.BelongsTo.BelongsToMany
                static BelongsToMany: any;
                // Too-deep object hierarchy from index.Sequelize.Association.BelongsTo.BelongsToMany
                static HasMany: any;
                // Too-deep object hierarchy from index.Sequelize.Association.BelongsTo.BelongsToMany
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                targetAssociation: any;
                sequelize: any;
                through: any;
                isMultiAssociation: any;
                doubleLinked: any;
                isAliased: any;
                as: any;
                combinedTableName: any;
                foreignKeyAttribute: any;
                foreignKey: any;
                foreignKeyDefault: any;
                otherKeyAttribute: any;
                otherKey: any;
                otherKeyDefault: any;
                options: any;
                throughModel: any;
                combinedName: any;
                associationAccessor: any;
                accessors: any;
            }
            class HasMany {
                // Circular reference from index.Sequelize.Association.BelongsTo.HasMany
                static Association: any;
                // Circular reference from index.Sequelize.Association.BelongsTo.HasMany
                static BelongsTo: any;
                // Too-deep object hierarchy from index.Sequelize.Association.BelongsTo.HasMany
                static BelongsToMany: any;
                // Circular reference from index.Sequelize.Association.BelongsTo.HasMany
                static HasMany: any;
                // Too-deep object hierarchy from index.Sequelize.Association.BelongsTo.HasMany
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                targetAssociation: any;
                sequelize: any;
                isMultiAssociation: any;
                foreignKeyAttribute: any;
                isAliased: any;
                as: any;
                foreignKey: any;
                identifierField: any;
                foreignKeyField: any;
                sourceKey: any;
                sourceKeyAttribute: any;
                sourceKeyField: any;
                associationAccessor: any;
                accessors: any;
            }
            class HasOne {
                // Circular reference from index.Sequelize.Association.BelongsTo.HasOne
                static Association: any;
                // Circular reference from index.Sequelize.Association.BelongsTo.HasOne
                static BelongsTo: any;
                // Too-deep object hierarchy from index.Sequelize.Association.BelongsTo.HasOne
                static BelongsToMany: any;
                // Too-deep object hierarchy from index.Sequelize.Association.BelongsTo.HasOne
                static HasMany: any;
                // Circular reference from index.Sequelize.Association.BelongsTo.HasOne
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                isSingleAssociation: any;
                foreignKeyAttribute: any;
                isAliased: any;
                as: any;
                foreignKey: any;
                sourceKey: any;
                sourceKeyAttribute: any;
                sourceKeyField: any;
                sourceKeyIsPrimary: any;
                associationAccessor: any;
                identifierField: any;
                accessors: any;
            }
        }
        class BelongsToMany {
            // Circular reference from index.Sequelize.Association.BelongsToMany
            static Association: any;
            // Circular reference from index.Sequelize.Association.BelongsToMany
            static BelongsToMany: any;
            constructor(source: any, target: any, options: any);
            associationType: any;
            targetAssociation: any;
            sequelize: any;
            through: any;
            isMultiAssociation: any;
            doubleLinked: any;
            isAliased: any;
            as: any;
            combinedTableName: any;
            foreignKeyAttribute: any;
            foreignKey: any;
            foreignKeyDefault: any;
            otherKeyAttribute: any;
            otherKey: any;
            otherKeyDefault: any;
            options: any;
            throughModel: any;
            combinedName: any;
            associationAccessor: any;
            accessors: any;
            add(sourceInstance: any, newInstances: any, options: any): any;
            count(instance: any, options: any): any;
            create(sourceInstance: any, values: any, options: any): any;
            get(instance: any, options: any): any;
            has(sourceInstance: any, instances: any, options: any): any;
            inspect(): any;
            mixin(obj: any): void;
            remove(sourceInstance: any, oldAssociatedObjects: any, options: any): any;
            set(sourceInstance: any, newAssociatedObjects: any, options: any): any;
            toInstanceArray(input: any): any;
            verifyAssociationAlias(alias: any): any;
        }
        namespace BelongsToMany {
            class BelongsTo {
                // Circular reference from index.Sequelize.Association.BelongsToMany.BelongsTo
                static Association: any;
                // Circular reference from index.Sequelize.Association.BelongsToMany.BelongsTo
                static BelongsTo: any;
                // Circular reference from index.Sequelize.Association.BelongsToMany.BelongsTo
                static BelongsToMany: any;
                // Too-deep object hierarchy from index.Sequelize.Association.BelongsToMany.BelongsTo
                static HasMany: any;
                // Too-deep object hierarchy from index.Sequelize.Association.BelongsToMany.BelongsTo
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                isSingleAssociation: any;
                foreignKeyAttribute: any;
                isAliased: any;
                as: any;
                foreignKey: any;
                identifier: any;
                identifierField: any;
                targetKey: any;
                targetKeyField: any;
                targetKeyIsPrimary: any;
                targetIdentifier: any;
                associationAccessor: any;
                accessors: any;
            }
            class HasMany {
                // Circular reference from index.Sequelize.Association.BelongsToMany.HasMany
                static Association: any;
                // Too-deep object hierarchy from index.Sequelize.Association.BelongsToMany.HasMany
                static BelongsTo: any;
                // Circular reference from index.Sequelize.Association.BelongsToMany.HasMany
                static BelongsToMany: any;
                // Circular reference from index.Sequelize.Association.BelongsToMany.HasMany
                static HasMany: any;
                // Too-deep object hierarchy from index.Sequelize.Association.BelongsToMany.HasMany
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                targetAssociation: any;
                sequelize: any;
                isMultiAssociation: any;
                foreignKeyAttribute: any;
                isAliased: any;
                as: any;
                foreignKey: any;
                identifierField: any;
                foreignKeyField: any;
                sourceKey: any;
                sourceKeyAttribute: any;
                sourceKeyField: any;
                associationAccessor: any;
                accessors: any;
            }
            class HasOne {
                // Circular reference from index.Sequelize.Association.BelongsToMany.HasOne
                static Association: any;
                // Too-deep object hierarchy from index.Sequelize.Association.BelongsToMany.HasOne
                static BelongsTo: any;
                // Circular reference from index.Sequelize.Association.BelongsToMany.HasOne
                static BelongsToMany: any;
                // Too-deep object hierarchy from index.Sequelize.Association.BelongsToMany.HasOne
                static HasMany: any;
                // Circular reference from index.Sequelize.Association.BelongsToMany.HasOne
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                isSingleAssociation: any;
                foreignKeyAttribute: any;
                isAliased: any;
                as: any;
                foreignKey: any;
                sourceKey: any;
                sourceKeyAttribute: any;
                sourceKeyField: any;
                sourceKeyIsPrimary: any;
                associationAccessor: any;
                identifierField: any;
                accessors: any;
            }
        }
        class HasMany {
            // Circular reference from index.Sequelize.Association.HasMany
            static Association: any;
            // Circular reference from index.Sequelize.Association.HasMany
            static HasMany: any;
            constructor(source: any, target: any, options: any);
            associationType: any;
            targetAssociation: any;
            sequelize: any;
            isMultiAssociation: any;
            foreignKeyAttribute: any;
            isAliased: any;
            as: any;
            foreignKey: any;
            identifierField: any;
            foreignKeyField: any;
            sourceKey: any;
            sourceKeyAttribute: any;
            sourceKeyField: any;
            associationAccessor: any;
            accessors: any;
            add(sourceInstance: any, targetInstances: any, options: any): any;
            count(instance: any, options: any): any;
            create(sourceInstance: any, values: any, options: any): any;
            get(instances: any, options: any): any;
            has(sourceInstance: any, targetInstances: any, options: any): any;
            inspect(): any;
            mixin(obj: any): void;
            remove(sourceInstance: any, targetInstances: any, options: any): any;
            set(sourceInstance: any, targetInstances: any, options: any): any;
            toInstanceArray(input: any): any;
            verifyAssociationAlias(alias: any): any;
        }
        namespace HasMany {
            class BelongsTo {
                // Circular reference from index.Sequelize.Association.HasMany.BelongsTo
                static Association: any;
                // Circular reference from index.Sequelize.Association.HasMany.BelongsTo
                static BelongsTo: any;
                // Too-deep object hierarchy from index.Sequelize.Association.HasMany.BelongsTo
                static BelongsToMany: any;
                // Circular reference from index.Sequelize.Association.HasMany.BelongsTo
                static HasMany: any;
                // Too-deep object hierarchy from index.Sequelize.Association.HasMany.BelongsTo
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                isSingleAssociation: any;
                foreignKeyAttribute: any;
                isAliased: any;
                as: any;
                foreignKey: any;
                identifier: any;
                identifierField: any;
                targetKey: any;
                targetKeyField: any;
                targetKeyIsPrimary: any;
                targetIdentifier: any;
                associationAccessor: any;
                accessors: any;
            }
            class BelongsToMany {
                // Circular reference from index.Sequelize.Association.HasMany.BelongsToMany
                static Association: any;
                // Too-deep object hierarchy from index.Sequelize.Association.HasMany.BelongsToMany
                static BelongsTo: any;
                // Circular reference from index.Sequelize.Association.HasMany.BelongsToMany
                static BelongsToMany: any;
                // Circular reference from index.Sequelize.Association.HasMany.BelongsToMany
                static HasMany: any;
                // Too-deep object hierarchy from index.Sequelize.Association.HasMany.BelongsToMany
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                targetAssociation: any;
                sequelize: any;
                through: any;
                isMultiAssociation: any;
                doubleLinked: any;
                isAliased: any;
                as: any;
                combinedTableName: any;
                foreignKeyAttribute: any;
                foreignKey: any;
                foreignKeyDefault: any;
                otherKeyAttribute: any;
                otherKey: any;
                otherKeyDefault: any;
                options: any;
                throughModel: any;
                combinedName: any;
                associationAccessor: any;
                accessors: any;
            }
            class HasOne {
                // Circular reference from index.Sequelize.Association.HasMany.HasOne
                static Association: any;
                // Too-deep object hierarchy from index.Sequelize.Association.HasMany.HasOne
                static BelongsTo: any;
                // Too-deep object hierarchy from index.Sequelize.Association.HasMany.HasOne
                static BelongsToMany: any;
                // Circular reference from index.Sequelize.Association.HasMany.HasOne
                static HasMany: any;
                // Circular reference from index.Sequelize.Association.HasMany.HasOne
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                isSingleAssociation: any;
                foreignKeyAttribute: any;
                isAliased: any;
                as: any;
                foreignKey: any;
                sourceKey: any;
                sourceKeyAttribute: any;
                sourceKeyField: any;
                sourceKeyIsPrimary: any;
                associationAccessor: any;
                identifierField: any;
                accessors: any;
            }
        }
        class HasOne {
            // Circular reference from index.Sequelize.Association.HasOne
            static Association: any;
            // Circular reference from index.Sequelize.Association.HasOne
            static HasOne: any;
            constructor(source: any, target: any, options: any);
            associationType: any;
            isSingleAssociation: any;
            foreignKeyAttribute: any;
            isAliased: any;
            as: any;
            foreignKey: any;
            sourceKey: any;
            sourceKeyAttribute: any;
            sourceKeyField: any;
            sourceKeyIsPrimary: any;
            associationAccessor: any;
            identifierField: any;
            accessors: any;
            create(sourceInstance: any, values: any, options: any): any;
            get(instances: any, options: any): any;
            inspect(): any;
            mixin(obj: any): void;
            set(sourceInstance: any, associatedInstance: any, options: any): any;
            toInstanceArray(input: any): any;
            verifyAssociationAlias(alias: any): any;
        }
        namespace HasOne {
            class BelongsTo {
                // Circular reference from index.Sequelize.Association.HasOne.BelongsTo
                static Association: any;
                // Circular reference from index.Sequelize.Association.HasOne.BelongsTo
                static BelongsTo: any;
                // Too-deep object hierarchy from index.Sequelize.Association.HasOne.BelongsTo
                static BelongsToMany: any;
                // Too-deep object hierarchy from index.Sequelize.Association.HasOne.BelongsTo
                static HasMany: any;
                // Circular reference from index.Sequelize.Association.HasOne.BelongsTo
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                isSingleAssociation: any;
                foreignKeyAttribute: any;
                isAliased: any;
                as: any;
                foreignKey: any;
                identifier: any;
                identifierField: any;
                targetKey: any;
                targetKeyField: any;
                targetKeyIsPrimary: any;
                targetIdentifier: any;
                associationAccessor: any;
                accessors: any;
            }
            class BelongsToMany {
                // Circular reference from index.Sequelize.Association.HasOne.BelongsToMany
                static Association: any;
                // Too-deep object hierarchy from index.Sequelize.Association.HasOne.BelongsToMany
                static BelongsTo: any;
                // Circular reference from index.Sequelize.Association.HasOne.BelongsToMany
                static BelongsToMany: any;
                // Too-deep object hierarchy from index.Sequelize.Association.HasOne.BelongsToMany
                static HasMany: any;
                // Circular reference from index.Sequelize.Association.HasOne.BelongsToMany
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                targetAssociation: any;
                sequelize: any;
                through: any;
                isMultiAssociation: any;
                doubleLinked: any;
                isAliased: any;
                as: any;
                combinedTableName: any;
                foreignKeyAttribute: any;
                foreignKey: any;
                foreignKeyDefault: any;
                otherKeyAttribute: any;
                otherKey: any;
                otherKeyDefault: any;
                options: any;
                throughModel: any;
                combinedName: any;
                associationAccessor: any;
                accessors: any;
            }
            class HasMany {
                // Circular reference from index.Sequelize.Association.HasOne.HasMany
                static Association: any;
                // Too-deep object hierarchy from index.Sequelize.Association.HasOne.HasMany
                static BelongsTo: any;
                // Too-deep object hierarchy from index.Sequelize.Association.HasOne.HasMany
                static BelongsToMany: any;
                // Circular reference from index.Sequelize.Association.HasOne.HasMany
                static HasMany: any;
                // Circular reference from index.Sequelize.Association.HasOne.HasMany
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                targetAssociation: any;
                sequelize: any;
                isMultiAssociation: any;
                foreignKeyAttribute: any;
                isAliased: any;
                as: any;
                foreignKey: any;
                identifierField: any;
                foreignKeyField: any;
                sourceKey: any;
                sourceKeyAttribute: any;
                sourceKeyField: any;
                associationAccessor: any;
                accessors: any;
            }
        }
    }
    class AssociationError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(message: any);
        name: any;
    }
    class BIGINT {
        static UNSIGNED: any;
        static ZEROFILL: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: boolean;
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class BLOB {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        constructor(p0: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class BOOLEAN {
        static extend(oldType: any): any;
        static key: string;
        static parse(value: any): any;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class BaseError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(message: any);
        name: any;
    }
    class BulkRecordError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(error: any, record: any);
        name: any;
        errors: any;
        record: any;
    }
    class CHAR {
        static BINARY: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        constructor(p0: any, p1: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class CIDR {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            postgres: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class CITEXT {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            postgres: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class ConnectionAcquireTimeoutError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(parent: any);
        name: any;
    }
    class ConnectionError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(parent: any);
        name: any;
        parent: any;
        original: any;
    }
    class ConnectionRefusedError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(parent: any);
        name: any;
    }
    class ConnectionTimedOutError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(parent: any);
        name: any;
    }
    class DATE {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        constructor(p0: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class DATEONLY {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
    }
    class DECIMAL {
        static UNSIGNED: any;
        static ZEROFILL: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        constructor(p0: any, p1: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class DOUBLE {
        static UNSIGNED: any;
        static ZEROFILL: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        constructor(p0: any, p1: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    namespace DataTypes {
        class ABSTRACT {
            static extend(oldType: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class ARRAY {
            static extend(oldType: any): any;
            static is(obj: any, type: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class BIGINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class BLOB {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class BOOLEAN {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class CHAR {
            static BINARY: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class CIDR {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class CITEXT {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DATE {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DATEONLY {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class DECIMAL {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DOUBLE {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class ENUM {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class FLOAT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class GEOGRAPHY {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class GEOMETRY {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class HSTORE {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class INET {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class INTEGER {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class JSON {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(): any;
        }
        class JSONB {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(): any;
        }
        class MACADDR {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class MEDIUMINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class NOW {
            static extend(oldType: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class NUMBER {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class NUMERIC {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class RANGE {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class REAL {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class SMALLINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class STRING {
            static BINARY: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class TEXT {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class TIME {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class TINYINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class UUID {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any, options: any): any;
        }
        class UUIDV1 {
            static extend(oldType: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any, options: any): any;
        }
        class UUIDV4 {
            static extend(oldType: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any, options: any): any;
        }
        class VIRTUAL {
            static extend(oldType: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        namespace mariadb {
            function DATE(): any;
            namespace DATE {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.DATE
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.DATE
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.DATE
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.DATE
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.DATE
                const warn: any;
            }
            function DATEONLY(): any;
            namespace DATEONLY {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.DATEONLY
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.DATEONLY
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.DATEONLY
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.DATEONLY
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.DATEONLY
                const warn: any;
            }
            function DECIMAL(): any;
            namespace DECIMAL {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.DECIMAL
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.DECIMAL
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.DECIMAL
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.DECIMAL
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.DECIMAL
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.DECIMAL
                const warn: any;
            }
            function ENUM(): any;
            namespace ENUM {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.ENUM
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.ENUM
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.ENUM
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.ENUM
                const warn: any;
            }
            function GEOMETRY(p0: any, p1: any): any;
            namespace GEOMETRY {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.GEOMETRY
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.GEOMETRY
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.GEOMETRY
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.GEOMETRY
                const warn: any;
            }
            function JSON(): any;
            namespace JSON {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.JSON
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.JSON
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.JSON
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.JSON
                const warn: any;
            }
            function UUID(): any;
            namespace UUID {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.UUID
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.UUID
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.UUID
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mariadb.UUID
                const warn: any;
            }
        }
        namespace mssql {
            function BIGINT(p0: any): any;
            namespace BIGINT {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.BIGINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.BIGINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.BIGINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.BIGINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.BIGINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.BIGINT
                const warn: any;
            }
            function BLOB(): any;
            namespace BLOB {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.BLOB
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.BLOB
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.BLOB
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.BLOB
                const warn: any;
            }
            function BOOLEAN(): any;
            namespace BOOLEAN {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.BOOLEAN
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.BOOLEAN
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.BOOLEAN
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.BOOLEAN
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.BOOLEAN
                const warn: any;
            }
            function DATE(): any;
            namespace DATE {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.DATE
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.DATE
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.DATE
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.DATE
                const warn: any;
            }
            function DATEONLY(): any;
            namespace DATEONLY {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.DATEONLY
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.DATEONLY
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.DATEONLY
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.DATEONLY
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.DATEONLY
                const warn: any;
            }
            function ENUM(): any;
            namespace ENUM {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.ENUM
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.ENUM
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.ENUM
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.ENUM
                const warn: any;
            }
            function FLOAT(p0: any, p1: any): any;
            namespace FLOAT {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.FLOAT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.FLOAT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.FLOAT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.FLOAT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.FLOAT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.FLOAT
                const warn: any;
            }
            function INTEGER(p0: any): any;
            namespace INTEGER {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.INTEGER
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.INTEGER
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.INTEGER
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.INTEGER
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.INTEGER
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.INTEGER
                const warn: any;
            }
            function NOW(): any;
            namespace NOW {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.NOW
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.NOW
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.NOW
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.NOW
                const warn: any;
            }
            function REAL(p0: any, p1: any): any;
            namespace REAL {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.REAL
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.REAL
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.REAL
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.REAL
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.REAL
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.REAL
                const warn: any;
            }
            function SMALLINT(p0: any): any;
            namespace SMALLINT {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.SMALLINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.SMALLINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.SMALLINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.SMALLINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.SMALLINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.SMALLINT
                const warn: any;
            }
            function STRING(): any;
            namespace STRING {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.STRING
                const BINARY: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.STRING
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.STRING
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.STRING
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.STRING
                const warn: any;
            }
            function TEXT(): any;
            namespace TEXT {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.TEXT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.TEXT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.TEXT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.TEXT
                const warn: any;
            }
            function TINYINT(p0: any): any;
            namespace TINYINT {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.TINYINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.TINYINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.TINYINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.TINYINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.TINYINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.TINYINT
                const warn: any;
            }
            function UUID(): any;
            namespace UUID {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.UUID
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.UUID
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.UUID
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mssql.UUID
                const warn: any;
            }
        }
        namespace mysql {
            function DATE(): any;
            namespace DATE {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.DATE
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.DATE
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.DATE
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.DATE
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.DATE
                const warn: any;
            }
            function DATEONLY(): any;
            namespace DATEONLY {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.DATEONLY
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.DATEONLY
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.DATEONLY
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.DATEONLY
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.DATEONLY
                const warn: any;
            }
            function DECIMAL(): any;
            namespace DECIMAL {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.DECIMAL
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.DECIMAL
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.DECIMAL
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.DECIMAL
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.DECIMAL
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.DECIMAL
                const warn: any;
            }
            function ENUM(): any;
            namespace ENUM {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.ENUM
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.ENUM
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.ENUM
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.ENUM
                const warn: any;
            }
            function GEOMETRY(p0: any, p1: any): any;
            namespace GEOMETRY {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.GEOMETRY
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.GEOMETRY
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.GEOMETRY
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.GEOMETRY
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.GEOMETRY
                const warn: any;
            }
            function JSON(): any;
            namespace JSON {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.JSON
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.JSON
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.JSON
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.JSON
                const warn: any;
            }
            function UUID(): any;
            namespace UUID {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.UUID
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.UUID
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.UUID
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.mysql.UUID
                const warn: any;
            }
        }
        namespace postgres {
            function BIGINT(p0: any): any;
            namespace BIGINT {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.BIGINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.BIGINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.BIGINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.BIGINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.BIGINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.BIGINT
                const warn: any;
            }
            function BLOB(): any;
            namespace BLOB {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.BLOB
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.BLOB
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.BLOB
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.BLOB
                const warn: any;
            }
            function BOOLEAN(): any;
            namespace BOOLEAN {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.BOOLEAN
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.BOOLEAN
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.BOOLEAN
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.BOOLEAN
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.BOOLEAN
                const warn: any;
            }
            function CHAR(): any;
            namespace CHAR {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.CHAR
                const BINARY: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.CHAR
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.CHAR
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.CHAR
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.CHAR
                const warn: any;
            }
            function CITEXT(): any;
            namespace CITEXT {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.CITEXT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.CITEXT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.CITEXT
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.CITEXT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.CITEXT
                const warn: any;
            }
            function DATE(): any;
            namespace DATE {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.DATE
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.DATE
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.DATE
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.DATE
                const warn: any;
            }
            function DATEONLY(): any;
            namespace DATEONLY {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.DATEONLY
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.DATEONLY
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.DATEONLY
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.DATEONLY
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.DATEONLY
                const warn: any;
            }
            function DECIMAL(): any;
            namespace DECIMAL {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.DECIMAL
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.DECIMAL
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.DECIMAL
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.DECIMAL
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.DECIMAL
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.DECIMAL
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.DECIMAL
                const warn: any;
            }
            function ENUM(): any;
            namespace ENUM {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.ENUM
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.ENUM
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.ENUM
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.ENUM
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.ENUM
                const warn: any;
            }
            function FLOAT(p0: any, p1: any): any;
            namespace FLOAT {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.FLOAT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.FLOAT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.FLOAT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.FLOAT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.FLOAT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.FLOAT
                const warn: any;
            }
            function GEOGRAPHY(): any;
            namespace GEOGRAPHY {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.GEOGRAPHY
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.GEOGRAPHY
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.GEOGRAPHY
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.GEOGRAPHY
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.GEOGRAPHY
                const warn: any;
            }
            function GEOMETRY(): any;
            namespace GEOMETRY {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.GEOMETRY
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.GEOMETRY
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.GEOMETRY
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.GEOMETRY
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.GEOMETRY
                const warn: any;
            }
            function HSTORE(): any;
            namespace HSTORE {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.HSTORE
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.HSTORE
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.HSTORE
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.HSTORE
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.HSTORE
                const warn: any;
            }
            function INTEGER(p0: any): any;
            namespace INTEGER {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.INTEGER
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.INTEGER
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.INTEGER
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.INTEGER
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.INTEGER
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.INTEGER
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.INTEGER
                const warn: any;
            }
            function RANGE(): any;
            namespace RANGE {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.RANGE
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.RANGE
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.RANGE
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.RANGE
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.RANGE
                const warn: any;
            }
            function REAL(p0: any): any;
            namespace REAL {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.REAL
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.REAL
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.REAL
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.REAL
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.REAL
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.REAL
                const warn: any;
            }
            function SMALLINT(p0: any): any;
            namespace SMALLINT {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.SMALLINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.SMALLINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.SMALLINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.SMALLINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.SMALLINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.SMALLINT
                const warn: any;
            }
            function STRING(): any;
            namespace STRING {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.STRING
                const BINARY: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.STRING
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.STRING
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.STRING
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.STRING
                const warn: any;
            }
            function TEXT(): any;
            namespace TEXT {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.TEXT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.TEXT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.TEXT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.TEXT
                const warn: any;
            }
            function TINYINT(p0: any): any;
            namespace TINYINT {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.TINYINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.TINYINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.TINYINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.TINYINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.TINYINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.postgres.TINYINT
                const warn: any;
            }
        }
        namespace sqlite {
            function BIGINT(p0: any): any;
            namespace BIGINT {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.BIGINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.BIGINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.BIGINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.BIGINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.BIGINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.BIGINT
                const warn: any;
            }
            function CHAR(): any;
            namespace CHAR {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.CHAR
                const BINARY: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.CHAR
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.CHAR
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.CHAR
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.CHAR
                const warn: any;
            }
            function CITEXT(): any;
            namespace CITEXT {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.CITEXT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.CITEXT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.CITEXT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.CITEXT
                const warn: any;
            }
            function DATE(): any;
            namespace DATE {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.DATE
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.DATE
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.DATE
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.DATE
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.DATE
                const warn: any;
            }
            function DATEONLY(): any;
            namespace DATEONLY {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.DATEONLY
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.DATEONLY
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.DATEONLY
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.DATEONLY
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.DATEONLY
                const warn: any;
            }
            function ENUM(): any;
            namespace ENUM {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.ENUM
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.ENUM
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.ENUM
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.ENUM
                const warn: any;
            }
            function FLOAT(): any;
            namespace FLOAT {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.FLOAT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.FLOAT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.FLOAT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.FLOAT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.FLOAT
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.FLOAT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.FLOAT
                const warn: any;
            }
            function INTEGER(p0: any): any;
            namespace INTEGER {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.INTEGER
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.INTEGER
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.INTEGER
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.INTEGER
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.INTEGER
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.INTEGER
                const warn: any;
            }
            function JSON(): any;
            namespace JSON {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.JSON
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.JSON
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.JSON
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.JSON
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.JSON
                const warn: any;
            }
            function MEDIUMINT(p0: any): any;
            namespace MEDIUMINT {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.MEDIUMINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.MEDIUMINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.MEDIUMINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.MEDIUMINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.MEDIUMINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.MEDIUMINT
                const warn: any;
            }
            function NUMBER(): any;
            namespace NUMBER {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.NUMBER
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.NUMBER
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.NUMBER
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.NUMBER
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.NUMBER
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.NUMBER
                const warn: any;
            }
            function REAL(): any;
            namespace REAL {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.REAL
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.REAL
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.REAL
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.REAL
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.REAL
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.REAL
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.REAL
                const warn: any;
            }
            function SMALLINT(p0: any): any;
            namespace SMALLINT {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.SMALLINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.SMALLINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.SMALLINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.SMALLINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.SMALLINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.SMALLINT
                const warn: any;
            }
            function STRING(): any;
            namespace STRING {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.STRING
                const BINARY: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.STRING
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.STRING
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.STRING
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.STRING
                const warn: any;
            }
            function TEXT(): any;
            namespace TEXT {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.TEXT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.TEXT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.TEXT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.TEXT
                const warn: any;
            }
            function TINYINT(p0: any): any;
            namespace TINYINT {
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.TINYINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.TINYINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.TINYINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.TINYINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.TINYINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.DataTypes.sqlite.TINYINT
                const warn: any;
            }
        }
    }
    class DatabaseError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(parent: any);
        name: any;
        parent: any;
        original: any;
        sql: any;
    }
    namespace Deferrable {
        class INITIALLY_DEFERRED {
            toSql(): any;
        }
        class INITIALLY_IMMEDIATE {
            toSql(): any;
        }
        class NOT {
            toSql(): any;
        }
        class SET_DEFERRED {
            constructor(p0: any);
            toSql(queryGenerator: any): any;
        }
        class SET_IMMEDIATE {
            constructor(p0: any);
            toSql(queryGenerator: any): any;
        }
    }
    class ENUM {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: boolean;
            mssql: boolean;
            mysql: boolean;
            postgres: any[];
            sqlite: boolean;
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class EagerLoadingError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(message: any);
        name: any;
    }
    class EmptyResultError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(message: any);
        name: any;
    }
    class Error {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(message: any);
        name: any;
    }
    class ExclusionConstraintError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(options: any);
        name: any;
        message: any;
        constraint: any;
        fields: any;
        table: any;
    }
    class FLOAT {
        static UNSIGNED: any;
        static ZEROFILL: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        constructor(p0: any, p1: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class ForeignKeyConstraintError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(options: any);
        name: any;
        message: any;
        fields: any;
        table: any;
        value: any;
        index: any;
        reltype: any;
    }
    class GEOGRAPHY {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            postgres: any[];
        };
        static warn(link: any, text: any): void;
        constructor(p0: any, p1: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
    }
    class GEOMETRY {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: boolean;
            mysql: any[];
            postgres: any[];
            sqlite: boolean;
        };
        static warn(link: any, text: any): void;
        constructor(p0: any, p1: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
    }
    class HSTORE {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            postgres: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class HostNotFoundError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(parent: any);
        name: any;
    }
    class HostNotReachableError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(parent: any);
        name: any;
    }
    class INET {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            postgres: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class INTEGER {
        static UNSIGNED: any;
        static ZEROFILL: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class InstanceError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(message: any);
        name: any;
    }
    class InvalidConnectionError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(parent: any);
        name: any;
    }
    class JSON {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(): any;
    }
    class JSONB {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            postgres: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(): any;
    }
    class MACADDR {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            postgres: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class MEDIUMINT {
        static UNSIGNED: any;
        static ZEROFILL: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: boolean;
            mysql: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class Model {
        static QueryGenerator: any;
        static QueryInterface: any;
        static addHook(hookType: any, name: any, fn: any): any;
        static addScope(name: any, scope: any, options: any): void;
        static afterAssociate(name: any, callback: any): any;
        static afterBulkCreate(name: any, callback: any): any;
        static afterBulkDestroy(name: any, callback: any): any;
        static afterBulkRestore(name: any, callback: any): any;
        static afterBulkSync(name: any, callback: any): any;
        static afterBulkUpdate(name: any, callback: any): any;
        static afterCreate(name: any, callback: any): any;
        static afterDestroy(name: any, callback: any): any;
        static afterFind(name: any, callback: any): any;
        static afterRestore(name: any, callback: any): any;
        static afterSave(name: any, callback: any): any;
        static afterSync(name: any, callback: any): any;
        static afterUpdate(name: any, callback: any): any;
        static afterUpsert(name: any, callback: any): any;
        static afterValidate(name: any, callback: any): any;
        static aggregate(attribute: any, aggregateFunction: any, options: any): any;
        static beforeAssociate(name: any, callback: any): any;
        static beforeBulkCreate(name: any, callback: any): any;
        static beforeBulkDestroy(name: any, callback: any): any;
        static beforeBulkRestore(name: any, callback: any): any;
        static beforeBulkSync(name: any, callback: any): any;
        static beforeBulkUpdate(name: any, callback: any): any;
        static beforeCount(name: any, callback: any): any;
        static beforeCreate(name: any, callback: any): any;
        static beforeDestroy(name: any, callback: any): any;
        static beforeFind(name: any, callback: any): any;
        static beforeFindAfterExpandIncludeAll(name: any, callback: any): any;
        static beforeFindAfterOptions(name: any, callback: any): any;
        static beforeRestore(name: any, callback: any): any;
        static beforeSave(name: any, callback: any): any;
        static beforeSync(name: any, callback: any): any;
        static beforeUpdate(name: any, callback: any): any;
        static beforeUpsert(name: any, callback: any): any;
        static beforeValidate(name: any, callback: any): any;
        static belongsTo(target: any, options: any): any;
        static belongsToMany(target: any, options: any): any;
        static build(values: any, options: any): any;
        static bulkBuild(valueSets: any, options: any): any;
        static bulkCreate(records: any, options: any): any;
        static count(options: any): any;
        static create(values: any, options: any): any;
        static decrement(fields: any, options: any): any;
        static describe(schema: any, options: any): any;
        static destroy(options: any): any;
        static drop(options: any): any;
        static dropSchema(schema: any): any;
        static findAll(options: any): any;
        static findAndCountAll(options: any): any;
        static findByPk(param: any, options: any): any;
        static findCreateFind(options: any): any;
        static findOne(options: any): any;
        static findOrBuild(options: any, ...args: any[]): any;
        static findOrCreate(options: any, ...args: any[]): any;
        static getAssociationForAlias(target: any, alias: any): any;
        static getAssociations(target: any): any;
        static getTableName(): any;
        static hasAlias(alias: any): any;
        static hasHook(hookType: any): any;
        static hasHooks(hookType: any): any;
        static hasMany(target: any, options: any): any;
        static hasOne(target: any, options: any): any;
        static increment(fields: any, options: any): any;
        static init(attributes: any, options: any): any;
        static inspect(): any;
        static max(field: any, options: any): any;
        static min(field: any, options: any): any;
        static refreshAttributes(): void;
        static removeAttribute(attribute: any): void;
        static removeHook(hookType: any, name: any): any;
        static restore(options: any): any;
        static runHooks(hooks: any, hookArgs: any): any;
        static schema(schema: any, options: any): any;
        static scope(option: any, ...args: any[]): any;
        static sum(field: any, options: any): any;
        static sync(options: any): any;
        static truncate(options: any): any;
        static unscoped(): any;
        static update(values: any, options: any): any;
        static upsert(values: any, options: any): any;
        static validationFailed(name: any, callback: any): any;
        static warnOnInvalidOptions(options: any, validColumnNames: any): void;
        constructor(values: any, options: any);
        dataValues: any;
        isNewRecord: any;
        addHook(...args: any[]): any;
        changed(key: any, value: any): any;
        decrement(fields: any, options: any): any;
        destroy(options: any): any;
        equals(other: any): any;
        equalsOneOf(others: any): any;
        get(key: any, options: any): any;
        getDataValue(key: any): any;
        hasHook(...args: any[]): any;
        hasHooks(...args: any[]): any;
        increment(fields: any, options: any): any;
        isSoftDeleted(): any;
        previous(key: any): any;
        reload(options: any): any;
        removeHook(...args: any[]): any;
        restore(options: any): any;
        runHooks(...args: any[]): any;
        save(options: any, ...args: any[]): any;
        set(key: any, value: any, options: any): any;
        setAttributes(updates: any): any;
        setDataValue(key: any, value: any): void;
        setValidators(attribute: any, validators: any): void;
        toJSON(): any;
        update(values: any, options: any): any;
        validate(options: any): any;
        where(checkVersion: any): any;
    }
    namespace Model {
        namespace Mixin {
            // Circular reference from index.Sequelize.Model.Mixin
            const Mixin: any;
            function belongsTo(target: any, options: any): any;
            function belongsToMany(target: any, options: any): any;
            function getAssociationForAlias(target: any, alias: any): any;
            function getAssociations(target: any): any;
            function hasMany(target: any, options: any): any;
            function hasOne(target: any, options: any): any;
        }
    }
    class NOW {
        static extend(oldType: any): any;
        static key: string;
        static types: {};
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
    }
    class NUMBER {
        static UNSIGNED: any;
        static ZEROFILL: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {};
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class NUMERIC {
        static UNSIGNED: any;
        static ZEROFILL: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        constructor(p0: any, p1: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class OptimisticLockError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(options: any);
        name: any;
        modelName: any;
        values: any;
        where: any;
    }
    class Promise {
        static AggregateError(message: any): any;
        static CancellationError(message: any): any;
        static OperationalError(message: any): any;
        // Circular reference from index.Sequelize.Promise
        static Promise: any;
        static PromiseInspection(promise: any): void;
        static RejectionError(message: any): any;
        static TimeoutError(message: any): any;
        static all(promises: any): any;
        static any(promises: any): any;
        static attempt(fn: any, ...args: any[]): any;
        static bind(thisArg: any, value: any): any;
        static cast(obj: any): any;
        static config(opts: any): any;
        static defer(): any;
        static delay(ms: any, value: any): any;
        static each(promises: any, fn: any): any;
        static filter(promises: any, fn: any, options: any): any;
        static fromCallback(fn: any, ...args: any[]): any;
        static fromNode(fn: any, ...args: any[]): any;
        static fulfilled(obj: any): any;
        static getNewLibraryCopy(): any;
        static hasLongStackTraces(): any;
        static is(val: any): any;
        static join(...args: any[]): any;
        static longStackTraces(): void;
        static map(promises: any, fn: any, options: any, _filter: any): any;
        static mapSeries(promises: any, fn: any): any;
        static method(fn: any): any;
        static onPossiblyUnhandledRejection(fn: any): void;
        static onUnhandledRejectionHandled(fn: any): void;
        static pending(): any;
        static promisify(fn: any, options: any): any;
        static promisifyAll(target: any, options: any): any;
        static props(promises: any): any;
        static race(promises: any): any;
        static reduce(promises: any, fn: any, initialValue: any, _each: any): any;
        static reject(reason: any): any;
        static rejected(reason: any): any;
        static resolve(obj: any): any;
        static setScheduler(fn: any): any;
        static settle(promises: any): any;
        static some(promises: any, howMany: any): any;
        static spawn(generatorFunction: any): any;
        static using(...args: any[]): any;
        static version: string;
        constructor(executor: any);
        all(...args: any[]): any;
        any(): any;
        asCallback(nodeback: any, options: any): any;
        bind(thisArg: any): any;
        call(methodName: any, ...args: any[]): any;
        cancel(): any;
        catchReturn(value: any, ...args: any[]): any;
        catchThrow(reason: any, ...args: any[]): any;
        caught(fn: any, ...args: any[]): any;
        delay(ms: any): any;
        disposer(fn: any): any;
        done(didFulfill: any, didReject: any): void;
        each(fn: any): any;
        error(fn: any): any;
        filter(fn: any, options: any): any;
        get(propertyName: any): any;
        isCancellable(): any;
        isCancelled(): any;
        isFulfilled(): any;
        isPending(): any;
        isRejected(): any;
        isResolved(): any;
        lastly(handler: any): any;
        map(fn: any, options: any): any;
        mapSeries(fn: any): any;
        nodeify(nodeback: any, options: any): any;
        props(): any;
        race(): any;
        reason(): any;
        reduce(fn: any, initialValue: any): any;
        reflect(): any;
        settle(): any;
        some(howMany: any): any;
        spread(fn: any): any;
        suppressUnhandledRejections(): void;
        tap(handler: any): any;
        tapCatch(handlerOrPredicate: any, ...args: any[]): any;
        then(didFulfill: any, didReject: any, ...args: any[]): any;
        thenReturn(value: any): any;
        thenThrow(reason: any): any;
        timeout(ms: any, message: any): any;
        toJSON(): any;
        value(): any;
    }
    namespace Promise {
        function RangeError(p0: any): any;
        namespace RangeError {
            function captureStackTrace(p0: any, p1: any): any;
            const stackTraceLimit: number;
        }
        function TypeError(p0: any): any;
        namespace TypeError {
            function captureStackTrace(p0: any, p1: any): any;
            const stackTraceLimit: number;
        }
        function coroutine(generatorFunction: any, options: any): any;
        namespace coroutine {
            function addYieldHandler(fn: any): void;
        }
    }
    class QueryError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(message: any);
        name: any;
    }
    class RANGE {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            postgres: {
                castTypes: any;
                subtypes: any;
            };
        };
        static warn(link: any, text: any): void;
        constructor(p0: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class REAL {
        static UNSIGNED: any;
        static ZEROFILL: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        constructor(p0: any, p1: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class SMALLINT {
        static UNSIGNED: any;
        static ZEROFILL: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class STRING {
        static BINARY: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        constructor(p0: any, p1: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class Sequelize {
        static IndexHints: {
            FORCE: string;
            IGNORE: string;
            USE: string;
        };
        static Op: {
            adjacent: symbol;
            all: symbol;
            and: symbol;
            any: symbol;
            between: symbol;
            col: symbol;
            contained: symbol;
            contains: symbol;
            endsWith: symbol;
            eq: symbol;
            gt: symbol;
            gte: symbol;
            iLike: symbol;
            iRegexp: symbol;
            in: symbol;
            is: symbol;
            join: symbol;
            like: symbol;
            lt: symbol;
            lte: symbol;
            ne: symbol;
            noExtendLeft: symbol;
            noExtendRight: symbol;
            not: symbol;
            notBetween: symbol;
            notILike: symbol;
            notIRegexp: symbol;
            notIn: symbol;
            notLike: symbol;
            notRegexp: symbol;
            or: symbol;
            overlap: symbol;
            placeholder: symbol;
            regexp: symbol;
            startsWith: symbol;
            strictLeft: symbol;
            strictRight: symbol;
            substring: symbol;
            values: symbol;
        };
        static QueryTypes: {
            BULKDELETE: string;
            BULKUPDATE: string;
            DELETE: string;
            DESCRIBE: string;
            FOREIGNKEYS: string;
            INSERT: string;
            RAW: string;
            SELECT: string;
            SHOWCONSTRAINTS: string;
            SHOWINDEXES: string;
            SHOWTABLES: string;
            UPDATE: string;
            UPSERT: string;
            VERSION: string;
        };
        // Circular reference from index.Sequelize.Sequelize
        static Sequelize: any;
        static TableHints: {
            NOEXPAND: string;
            NOLOCK: string;
            NOWAIT: string;
            PAGLOCK: string;
            READCOMMITTED: string;
            READPAST: string;
            READUNCOMMITTED: string;
            REPEATABLEREAD: string;
            ROWLOCK: string;
            SERIALIZABLE: string;
            SNAPSHOT: string;
            TABLOCK: string;
            TABLOCKX: string;
            UPDLOCK: string;
            XLOCK: string;
        };
        static addHook(hookType: any, name: any, fn: any): any;
        static afterAssociate(name: any, callback: any): any;
        static afterBulkCreate(name: any, callback: any): any;
        static afterBulkDestroy(name: any, callback: any): any;
        static afterBulkRestore(name: any, callback: any): any;
        static afterBulkSync(name: any, callback: any): any;
        static afterBulkUpdate(name: any, callback: any): any;
        static afterConnect(name: any, callback: any): any;
        static afterCreate(name: any, callback: any): any;
        static afterDefine(name: any, callback: any): any;
        static afterDestroy(name: any, callback: any): any;
        static afterFind(name: any, callback: any): any;
        static afterInit(name: any, callback: any): any;
        static afterRestore(name: any, callback: any): any;
        static afterSave(name: any, callback: any): any;
        static afterSync(name: any, callback: any): any;
        static afterUpdate(name: any, callback: any): any;
        static afterUpsert(name: any, callback: any): any;
        static afterValidate(name: any, callback: any): any;
        static and(args: any): any;
        static beforeAssociate(name: any, callback: any): any;
        static beforeBulkCreate(name: any, callback: any): any;
        static beforeBulkDestroy(name: any, callback: any): any;
        static beforeBulkRestore(name: any, callback: any): any;
        static beforeBulkSync(name: any, callback: any): any;
        static beforeBulkUpdate(name: any, callback: any): any;
        static beforeConnect(name: any, callback: any): any;
        static beforeCount(name: any, callback: any): any;
        static beforeCreate(name: any, callback: any): any;
        static beforeDefine(name: any, callback: any): any;
        static beforeDestroy(name: any, callback: any): any;
        static beforeFind(name: any, callback: any): any;
        static beforeFindAfterExpandIncludeAll(name: any, callback: any): any;
        static beforeFindAfterOptions(name: any, callback: any): any;
        static beforeInit(name: any, callback: any): any;
        static beforeRestore(name: any, callback: any): any;
        static beforeSave(name: any, callback: any): any;
        static beforeSync(name: any, callback: any): any;
        static beforeUpdate(name: any, callback: any): any;
        static beforeUpsert(name: any, callback: any): any;
        static beforeValidate(name: any, callback: any): any;
        static cast(val: any, type: any): any;
        static col(col: any): any;
        static fn(fn: any, args: any): any;
        static hasHook(hookType: any): any;
        static hasHooks(hookType: any): any;
        static json(conditionsOrPath: any, value: any): any;
        static literal(val: any): any;
        static options: {
            hooks: {};
        };
        static or(args: any): any;
        static removeHook(hookType: any, name: any): any;
        static runHooks(hooks: any, hookArgs: any): any;
        static useCLS(ns: any): any;
        static useInflection(_inflection: any): void;
        static validationFailed(name: any, callback: any): any;
        static version: string;
        static where(attr: any, comparator: any, logic: any): any;
        constructor(database: any, username: any, password: any, options: any, ...args: any[]);
        options: any;
        config: any;
        dialect: any;
        queryInterface: any;
        models: any;
        modelManager: any;
        connectionManager: any;
        importCache: any;
        test: any;
        addHook(hookType: any, name: any, fn: any): any;
        afterAssociate(name: any, callback: any): any;
        afterBulkCreate(name: any, callback: any): any;
        afterBulkDestroy(name: any, callback: any): any;
        afterBulkRestore(name: any, callback: any): any;
        afterBulkSync(name: any, callback: any): any;
        afterBulkUpdate(name: any, callback: any): any;
        afterConnect(name: any, callback: any): any;
        afterCreate(name: any, callback: any): any;
        afterDefine(name: any, callback: any): any;
        afterDestroy(name: any, callback: any): any;
        afterFind(name: any, callback: any): any;
        afterInit(name: any, callback: any): any;
        afterRestore(name: any, callback: any): any;
        afterSave(name: any, callback: any): any;
        afterSync(name: any, callback: any): any;
        afterUpdate(name: any, callback: any): any;
        afterUpsert(name: any, callback: any): any;
        afterValidate(name: any, callback: any): any;
        and(args: any): any;
        authenticate(options: any): any;
        beforeAssociate(name: any, callback: any): any;
        beforeBulkCreate(name: any, callback: any): any;
        beforeBulkDestroy(name: any, callback: any): any;
        beforeBulkRestore(name: any, callback: any): any;
        beforeBulkSync(name: any, callback: any): any;
        beforeBulkUpdate(name: any, callback: any): any;
        beforeConnect(name: any, callback: any): any;
        beforeCount(name: any, callback: any): any;
        beforeCreate(name: any, callback: any): any;
        beforeDefine(name: any, callback: any): any;
        beforeDestroy(name: any, callback: any): any;
        beforeFind(name: any, callback: any): any;
        beforeFindAfterExpandIncludeAll(name: any, callback: any): any;
        beforeFindAfterOptions(name: any, callback: any): any;
        beforeInit(name: any, callback: any): any;
        beforeRestore(name: any, callback: any): any;
        beforeSave(name: any, callback: any): any;
        beforeSync(name: any, callback: any): any;
        beforeUpdate(name: any, callback: any): any;
        beforeUpsert(name: any, callback: any): any;
        beforeValidate(name: any, callback: any): any;
        cast(val: any, type: any): any;
        close(): any;
        col(col: any): any;
        createSchema(schema: any, options: any): any;
        databaseVersion(options: any): any;
        define(modelName: any, attributes: any, options: any): any;
        drop(options: any): any;
        dropAllSchemas(options: any): any;
        dropSchema(schema: any, options: any): any;
        escape(value: any): any;
        fn(fn: any, args: any): any;
        getDatabaseName(): any;
        getDialect(): any;
        getQueryInterface(): any;
        hasHook(hookType: any): any;
        hasHooks(hookType: any): any;
        isDefined(modelName: any): any;
        json(conditionsOrPath: any, value: any): any;
        literal(val: any): any;
        log(args: any): void;
        model(modelName: any): any;
        normalizeAttribute(attribute: any): any;
        normalizeDataType(Type: any): any;
        or(args: any): any;
        query(sql: any, options: any): any;
        random(): any;
        refreshTypes(): void;
        removeHook(hookType: any, name: any): any;
        runHooks(hooks: any, hookArgs: any): any;
        set(variables: any, options: any): any;
        showAllSchemas(options: any): any;
        sync(options: any): any;
        transaction(options: any, autoCallback: any): any;
        truncate(options: any): any;
        validate(options: any): any;
        validationFailed(name: any, callback: any): any;
        where(attr: any, comparator: any, logic: any): any;
    }
    namespace Sequelize {
        class ABSTRACT {
            static extend(oldType: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class ARRAY {
            static extend(oldType: any): any;
            static is(obj: any, type: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class AccessDeniedError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(parent: any);
            name: any;
        }
        class Association {
            // Circular reference from index.Sequelize.Sequelize.Association
            static Association: any;
            constructor(source: any, target: any, options: any);
            source: any;
            target: any;
            options: any;
            scope: any;
            isSelfAssociation: any;
            as: any;
            associationType: any;
            inspect(): any;
            toInstanceArray(input: any): any;
        }
        namespace Association {
            class BelongsTo {
                // Circular reference from index.Sequelize.Sequelize.Association.BelongsTo
                static Association: any;
                // Circular reference from index.Sequelize.Sequelize.Association.BelongsTo
                static BelongsTo: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Association.BelongsTo
                static BelongsToMany: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Association.BelongsTo
                static HasMany: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Association.BelongsTo
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                isSingleAssociation: any;
                foreignKeyAttribute: any;
                isAliased: any;
                as: any;
                foreignKey: any;
                identifier: any;
                identifierField: any;
                targetKey: any;
                targetKeyField: any;
                targetKeyIsPrimary: any;
                targetIdentifier: any;
                associationAccessor: any;
                accessors: any;
            }
            class BelongsToMany {
                // Circular reference from index.Sequelize.Sequelize.Association.BelongsToMany
                static Association: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Association.BelongsToMany
                static BelongsTo: any;
                // Circular reference from index.Sequelize.Sequelize.Association.BelongsToMany
                static BelongsToMany: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Association.BelongsToMany
                static HasMany: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Association.BelongsToMany
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                targetAssociation: any;
                sequelize: any;
                through: any;
                isMultiAssociation: any;
                doubleLinked: any;
                isAliased: any;
                as: any;
                combinedTableName: any;
                foreignKeyAttribute: any;
                foreignKey: any;
                foreignKeyDefault: any;
                otherKeyAttribute: any;
                otherKey: any;
                otherKeyDefault: any;
                options: any;
                throughModel: any;
                combinedName: any;
                associationAccessor: any;
                accessors: any;
            }
            class HasMany {
                // Circular reference from index.Sequelize.Sequelize.Association.HasMany
                static Association: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Association.HasMany
                static BelongsTo: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Association.HasMany
                static BelongsToMany: any;
                // Circular reference from index.Sequelize.Sequelize.Association.HasMany
                static HasMany: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Association.HasMany
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                targetAssociation: any;
                sequelize: any;
                isMultiAssociation: any;
                foreignKeyAttribute: any;
                isAliased: any;
                as: any;
                foreignKey: any;
                identifierField: any;
                foreignKeyField: any;
                sourceKey: any;
                sourceKeyAttribute: any;
                sourceKeyField: any;
                associationAccessor: any;
                accessors: any;
            }
            class HasOne {
                // Circular reference from index.Sequelize.Sequelize.Association.HasOne
                static Association: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Association.HasOne
                static BelongsTo: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Association.HasOne
                static BelongsToMany: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Association.HasOne
                static HasMany: any;
                // Circular reference from index.Sequelize.Sequelize.Association.HasOne
                static HasOne: any;
                constructor(source: any, target: any, options: any);
                associationType: any;
                isSingleAssociation: any;
                foreignKeyAttribute: any;
                isAliased: any;
                as: any;
                foreignKey: any;
                sourceKey: any;
                sourceKeyAttribute: any;
                sourceKeyField: any;
                sourceKeyIsPrimary: any;
                associationAccessor: any;
                identifierField: any;
                accessors: any;
            }
        }
        class AssociationError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(message: any);
            name: any;
        }
        class BIGINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class BLOB {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class BOOLEAN {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class BaseError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(message: any);
            name: any;
        }
        class BulkRecordError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(error: any, record: any);
            name: any;
            errors: any;
            record: any;
        }
        class CHAR {
            static BINARY: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class CIDR {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class CITEXT {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class ConnectionAcquireTimeoutError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(parent: any);
            name: any;
        }
        class ConnectionError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(parent: any);
            name: any;
            parent: any;
            original: any;
        }
        class ConnectionRefusedError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(parent: any);
            name: any;
        }
        class ConnectionTimedOutError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(parent: any);
            name: any;
        }
        class DATE {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DATEONLY {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class DECIMAL {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DOUBLE {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        namespace DataTypes {
            function ABSTRACT(): any;
            namespace ABSTRACT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.ABSTRACT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.ABSTRACT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.ABSTRACT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.ABSTRACT
                const warn: any;
            }
            function ARRAY(p0: any): any;
            namespace ARRAY {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.ARRAY
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.ARRAY
                const is: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.ARRAY
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.ARRAY
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.ARRAY
                const warn: any;
            }
            function BIGINT(): any;
            namespace BIGINT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.BIGINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.BIGINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.BIGINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.BIGINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.BIGINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.BIGINT
                const warn: any;
            }
            function BLOB(p0: any): any;
            namespace BLOB {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.BLOB
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.BLOB
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.BLOB
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.BLOB
                const warn: any;
            }
            function BOOLEAN(): any;
            namespace BOOLEAN {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.BOOLEAN
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.BOOLEAN
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.BOOLEAN
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.BOOLEAN
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.BOOLEAN
                const warn: any;
            }
            function CHAR(p0: any, p1: any): any;
            namespace CHAR {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.CHAR
                const BINARY: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.CHAR
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.CHAR
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.CHAR
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.CHAR
                const warn: any;
            }
            function CIDR(): any;
            namespace CIDR {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.CIDR
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.CIDR
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.CIDR
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.CIDR
                const warn: any;
            }
            function CITEXT(): any;
            namespace CITEXT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.CITEXT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.CITEXT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.CITEXT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.CITEXT
                const warn: any;
            }
            function DATE(p0: any): any;
            namespace DATE {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.DATE
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.DATE
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.DATE
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.DATE
                const warn: any;
            }
            function DATEONLY(): any;
            namespace DATEONLY {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.DATEONLY
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.DATEONLY
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.DATEONLY
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.DATEONLY
                const warn: any;
            }
            function DECIMAL(p0: any, p1: any): any;
            namespace DECIMAL {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.DECIMAL
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.DECIMAL
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.DECIMAL
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.DECIMAL
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.DECIMAL
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.DECIMAL
                const warn: any;
            }
            function DOUBLE(p0: any, p1: any): any;
            namespace DOUBLE {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.DOUBLE
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.DOUBLE
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.DOUBLE
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.DOUBLE
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.DOUBLE
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.DOUBLE
                const warn: any;
            }
            function ENUM(): any;
            namespace ENUM {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.ENUM
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.ENUM
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.ENUM
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.ENUM
                const warn: any;
            }
            function FLOAT(p0: any, p1: any): any;
            namespace FLOAT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.FLOAT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.FLOAT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.FLOAT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.FLOAT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.FLOAT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.FLOAT
                const warn: any;
            }
            function GEOGRAPHY(p0: any, p1: any): any;
            namespace GEOGRAPHY {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.GEOGRAPHY
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.GEOGRAPHY
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.GEOGRAPHY
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.GEOGRAPHY
                const warn: any;
            }
            function GEOMETRY(p0: any, p1: any): any;
            namespace GEOMETRY {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.GEOMETRY
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.GEOMETRY
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.GEOMETRY
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.GEOMETRY
                const warn: any;
            }
            function HSTORE(): any;
            namespace HSTORE {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.HSTORE
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.HSTORE
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.HSTORE
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.HSTORE
                const warn: any;
            }
            function INET(): any;
            namespace INET {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.INET
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.INET
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.INET
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.INET
                const warn: any;
            }
            function INTEGER(): any;
            namespace INTEGER {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.INTEGER
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.INTEGER
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.INTEGER
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.INTEGER
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.INTEGER
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.INTEGER
                const warn: any;
            }
            function JSON(): any;
            namespace JSON {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.JSON
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.JSON
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.JSON
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.JSON
                const warn: any;
            }
            function JSONB(): any;
            namespace JSONB {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.JSONB
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.JSONB
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.JSONB
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.JSONB
                const warn: any;
            }
            function MACADDR(): any;
            namespace MACADDR {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.MACADDR
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.MACADDR
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.MACADDR
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.MACADDR
                const warn: any;
            }
            function MEDIUMINT(): any;
            namespace MEDIUMINT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.MEDIUMINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.MEDIUMINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.MEDIUMINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.MEDIUMINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.MEDIUMINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.MEDIUMINT
                const warn: any;
            }
            function NOW(): any;
            namespace NOW {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.NOW
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.NOW
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.NOW
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.NOW
                const warn: any;
            }
            function NUMBER(): any;
            namespace NUMBER {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.NUMBER
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.NUMBER
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.NUMBER
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.NUMBER
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.NUMBER
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.NUMBER
                const warn: any;
            }
            function NUMERIC(p0: any, p1: any): any;
            namespace NUMERIC {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.NUMERIC
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.NUMERIC
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.NUMERIC
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.NUMERIC
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.NUMERIC
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.NUMERIC
                const warn: any;
            }
            function RANGE(p0: any): any;
            namespace RANGE {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.RANGE
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.RANGE
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.RANGE
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.RANGE
                const warn: any;
            }
            function REAL(p0: any, p1: any): any;
            namespace REAL {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.REAL
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.REAL
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.REAL
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.REAL
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.REAL
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.REAL
                const warn: any;
            }
            function SMALLINT(): any;
            namespace SMALLINT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.SMALLINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.SMALLINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.SMALLINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.SMALLINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.SMALLINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.SMALLINT
                const warn: any;
            }
            function STRING(p0: any, p1: any): any;
            namespace STRING {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.STRING
                const BINARY: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.STRING
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.STRING
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.STRING
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.STRING
                const warn: any;
            }
            function TEXT(p0: any): any;
            namespace TEXT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.TEXT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.TEXT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.TEXT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.TEXT
                const warn: any;
            }
            function TIME(): any;
            namespace TIME {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.TIME
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.TIME
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.TIME
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.TIME
                const warn: any;
            }
            function TINYINT(): any;
            namespace TINYINT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.TINYINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.TINYINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.TINYINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.TINYINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.TINYINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.TINYINT
                const warn: any;
            }
            function UUID(): any;
            namespace UUID {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.UUID
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.UUID
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.UUID
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.UUID
                const warn: any;
            }
            function UUIDV1(): any;
            namespace UUIDV1 {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.UUIDV1
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.UUIDV1
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.UUIDV1
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.UUIDV1
                const warn: any;
            }
            function UUIDV4(): any;
            namespace UUIDV4 {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.UUIDV4
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.UUIDV4
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.UUIDV4
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.UUIDV4
                const warn: any;
            }
            function VIRTUAL(p0: any, p1: any): any;
            namespace VIRTUAL {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.VIRTUAL
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.VIRTUAL
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.VIRTUAL
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.DataTypes.VIRTUAL
                const warn: any;
            }
            const mariadb: {
                DATE: any;
                DATEONLY: any;
                DECIMAL: any;
                ENUM: any;
                GEOMETRY: any;
                JSON: any;
                UUID: any;
            };
            const mssql: {
                BIGINT: any;
                BLOB: any;
                BOOLEAN: any;
                DATE: any;
                DATEONLY: any;
                ENUM: any;
                FLOAT: any;
                INTEGER: any;
                NOW: any;
                REAL: any;
                SMALLINT: any;
                STRING: any;
                TEXT: any;
                TINYINT: any;
                UUID: any;
            };
            const mysql: {
                DATE: any;
                DATEONLY: any;
                DECIMAL: any;
                ENUM: any;
                GEOMETRY: any;
                JSON: any;
                UUID: any;
            };
            const postgres: {
                BIGINT: any;
                BLOB: any;
                BOOLEAN: any;
                CHAR: any;
                CITEXT: any;
                DATE: any;
                DATEONLY: any;
                DECIMAL: any;
                "DOUBLE PRECISION": any;
                ENUM: any;
                FLOAT: any;
                GEOGRAPHY: any;
                GEOMETRY: any;
                HSTORE: any;
                INTEGER: any;
                RANGE: any;
                REAL: any;
                SMALLINT: any;
                STRING: any;
                TEXT: any;
                TINYINT: any;
            };
            const sqlite: {
                BIGINT: any;
                CHAR: any;
                CITEXT: any;
                DATE: any;
                DATEONLY: any;
                "DOUBLE PRECISION": any;
                ENUM: any;
                FLOAT: any;
                INTEGER: any;
                JSON: any;
                MEDIUMINT: any;
                NUMBER: any;
                REAL: any;
                SMALLINT: any;
                STRING: any;
                TEXT: any;
                TINYINT: any;
            };
        }
        class DatabaseError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(parent: any);
            name: any;
            parent: any;
            original: any;
            sql: any;
        }
        namespace Deferrable {
            function INITIALLY_DEFERRED(): any;
            function INITIALLY_IMMEDIATE(): any;
            function NOT(): any;
            function SET_DEFERRED(p0: any): any;
            function SET_IMMEDIATE(p0: any): any;
        }
        class ENUM {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class EagerLoadingError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(message: any);
            name: any;
        }
        class EmptyResultError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(message: any);
            name: any;
        }
        class Error {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(message: any);
            name: any;
        }
        class ExclusionConstraintError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(options: any);
            name: any;
            message: any;
            constraint: any;
            fields: any;
            table: any;
        }
        class FLOAT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class ForeignKeyConstraintError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(options: any);
            name: any;
            message: any;
            fields: any;
            table: any;
            value: any;
            index: any;
            reltype: any;
        }
        class GEOGRAPHY {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class GEOMETRY {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class HSTORE {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class HostNotFoundError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(parent: any);
            name: any;
        }
        class HostNotReachableError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(parent: any);
            name: any;
        }
        class INET {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class INTEGER {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class InstanceError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(message: any);
            name: any;
        }
        class InvalidConnectionError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(parent: any);
            name: any;
        }
        class JSON {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(): any;
        }
        class JSONB {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(): any;
        }
        class MACADDR {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class MEDIUMINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class Model {
            static Mixin: {
                Mixin: any;
                belongsTo: any;
                belongsToMany: any;
                default: any;
                getAssociationForAlias: any;
                getAssociations: any;
                hasMany: any;
                hasOne: any;
            };
            static QueryGenerator: any;
            static QueryInterface: any;
            static addHook(hookType: any, name: any, fn: any): any;
            static addScope(name: any, scope: any, options: any): void;
            static afterAssociate(name: any, callback: any): any;
            static afterBulkCreate(name: any, callback: any): any;
            static afterBulkDestroy(name: any, callback: any): any;
            static afterBulkRestore(name: any, callback: any): any;
            static afterBulkSync(name: any, callback: any): any;
            static afterBulkUpdate(name: any, callback: any): any;
            static afterCreate(name: any, callback: any): any;
            static afterDestroy(name: any, callback: any): any;
            static afterFind(name: any, callback: any): any;
            static afterRestore(name: any, callback: any): any;
            static afterSave(name: any, callback: any): any;
            static afterSync(name: any, callback: any): any;
            static afterUpdate(name: any, callback: any): any;
            static afterUpsert(name: any, callback: any): any;
            static afterValidate(name: any, callback: any): any;
            static aggregate(attribute: any, aggregateFunction: any, options: any): any;
            static beforeAssociate(name: any, callback: any): any;
            static beforeBulkCreate(name: any, callback: any): any;
            static beforeBulkDestroy(name: any, callback: any): any;
            static beforeBulkRestore(name: any, callback: any): any;
            static beforeBulkSync(name: any, callback: any): any;
            static beforeBulkUpdate(name: any, callback: any): any;
            static beforeCount(name: any, callback: any): any;
            static beforeCreate(name: any, callback: any): any;
            static beforeDestroy(name: any, callback: any): any;
            static beforeFind(name: any, callback: any): any;
            static beforeFindAfterExpandIncludeAll(name: any, callback: any): any;
            static beforeFindAfterOptions(name: any, callback: any): any;
            static beforeRestore(name: any, callback: any): any;
            static beforeSave(name: any, callback: any): any;
            static beforeSync(name: any, callback: any): any;
            static beforeUpdate(name: any, callback: any): any;
            static beforeUpsert(name: any, callback: any): any;
            static beforeValidate(name: any, callback: any): any;
            static belongsTo(target: any, options: any): any;
            static belongsToMany(target: any, options: any): any;
            static build(values: any, options: any): any;
            static bulkBuild(valueSets: any, options: any): any;
            static bulkCreate(records: any, options: any): any;
            static count(options: any): any;
            static create(values: any, options: any): any;
            static decrement(fields: any, options: any): any;
            static describe(schema: any, options: any): any;
            static destroy(options: any): any;
            static drop(options: any): any;
            static dropSchema(schema: any): any;
            static findAll(options: any): any;
            static findAndCountAll(options: any): any;
            static findByPk(param: any, options: any): any;
            static findCreateFind(options: any): any;
            static findOne(options: any): any;
            static findOrBuild(options: any, ...args: any[]): any;
            static findOrCreate(options: any, ...args: any[]): any;
            static getAssociationForAlias(target: any, alias: any): any;
            static getAssociations(target: any): any;
            static getTableName(): any;
            static hasAlias(alias: any): any;
            static hasHook(hookType: any): any;
            static hasHooks(hookType: any): any;
            static hasMany(target: any, options: any): any;
            static hasOne(target: any, options: any): any;
            static increment(fields: any, options: any): any;
            static init(attributes: any, options: any): any;
            static inspect(): any;
            static max(field: any, options: any): any;
            static min(field: any, options: any): any;
            static refreshAttributes(): void;
            static removeAttribute(attribute: any): void;
            static removeHook(hookType: any, name: any): any;
            static restore(options: any): any;
            static runHooks(hooks: any, hookArgs: any): any;
            static schema(schema: any, options: any): any;
            static scope(option: any, ...args: any[]): any;
            static sum(field: any, options: any): any;
            static sync(options: any): any;
            static truncate(options: any): any;
            static unscoped(): any;
            static update(values: any, options: any): any;
            static upsert(values: any, options: any): any;
            static validationFailed(name: any, callback: any): any;
            static warnOnInvalidOptions(options: any, validColumnNames: any): void;
            constructor(values: any, options: any);
            dataValues: any;
            isNewRecord: any;
            addHook(...args: any[]): any;
            changed(key: any, value: any): any;
            decrement(fields: any, options: any): any;
            destroy(options: any): any;
            equals(other: any): any;
            equalsOneOf(others: any): any;
            get(key: any, options: any): any;
            getDataValue(key: any): any;
            hasHook(...args: any[]): any;
            hasHooks(...args: any[]): any;
            increment(fields: any, options: any): any;
            isSoftDeleted(): any;
            previous(key: any): any;
            reload(options: any): any;
            removeHook(...args: any[]): any;
            restore(options: any): any;
            runHooks(...args: any[]): any;
            save(options: any, ...args: any[]): any;
            set(key: any, value: any, options: any): any;
            setAttributes(updates: any): any;
            setDataValue(key: any, value: any): void;
            setValidators(attribute: any, validators: any): void;
            toJSON(): any;
            update(values: any, options: any): any;
            validate(options: any): any;
            where(checkVersion: any): any;
        }
        class NOW {
            static extend(oldType: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class NUMBER {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class NUMERIC {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class OptimisticLockError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(options: any);
            name: any;
            modelName: any;
            values: any;
            where: any;
        }
        class Promise {
            static AggregateError(message: any): any;
            static CancellationError(message: any): any;
            static OperationalError(message: any): any;
            // Circular reference from index.Sequelize.Sequelize.Promise
            static Promise: any;
            static PromiseInspection(promise: any): void;
            static RejectionError(message: any): any;
            static TimeoutError(message: any): any;
            static all(promises: any): any;
            static any(promises: any): any;
            static attempt(fn: any, ...args: any[]): any;
            static bind(thisArg: any, value: any): any;
            static cast(obj: any): any;
            static config(opts: any): any;
            static defer(): any;
            static delay(ms: any, value: any): any;
            static each(promises: any, fn: any): any;
            static filter(promises: any, fn: any, options: any): any;
            static fromCallback(fn: any, ...args: any[]): any;
            static fromNode(fn: any, ...args: any[]): any;
            static fulfilled(obj: any): any;
            static getNewLibraryCopy(): any;
            static hasLongStackTraces(): any;
            static is(val: any): any;
            static join(...args: any[]): any;
            static longStackTraces(): void;
            static map(promises: any, fn: any, options: any, _filter: any): any;
            static mapSeries(promises: any, fn: any): any;
            static method(fn: any): any;
            static onPossiblyUnhandledRejection(fn: any): void;
            static onUnhandledRejectionHandled(fn: any): void;
            static pending(): any;
            static promisify(fn: any, options: any): any;
            static promisifyAll(target: any, options: any): any;
            static props(promises: any): any;
            static race(promises: any): any;
            static reduce(promises: any, fn: any, initialValue: any, _each: any): any;
            static reject(reason: any): any;
            static rejected(reason: any): any;
            static resolve(obj: any): any;
            static setScheduler(fn: any): any;
            static settle(promises: any): any;
            static some(promises: any, howMany: any): any;
            static spawn(generatorFunction: any): any;
            static using(...args: any[]): any;
            static version: string;
            constructor(executor: any);
            all(...args: any[]): any;
            any(): any;
            asCallback(nodeback: any, options: any): any;
            bind(thisArg: any): any;
            call(methodName: any, ...args: any[]): any;
            cancel(): any;
            catchReturn(value: any, ...args: any[]): any;
            catchThrow(reason: any, ...args: any[]): any;
            caught(fn: any, ...args: any[]): any;
            delay(ms: any): any;
            disposer(fn: any): any;
            done(didFulfill: any, didReject: any): void;
            each(fn: any): any;
            error(fn: any): any;
            filter(fn: any, options: any): any;
            get(propertyName: any): any;
            isCancellable(): any;
            isCancelled(): any;
            isFulfilled(): any;
            isPending(): any;
            isRejected(): any;
            isResolved(): any;
            lastly(handler: any): any;
            map(fn: any, options: any): any;
            mapSeries(fn: any): any;
            nodeify(nodeback: any, options: any): any;
            props(): any;
            race(): any;
            reason(): any;
            reduce(fn: any, initialValue: any): any;
            reflect(): any;
            settle(): any;
            some(howMany: any): any;
            spread(fn: any): any;
            suppressUnhandledRejections(): void;
            tap(handler: any): any;
            tapCatch(handlerOrPredicate: any, ...args: any[]): any;
            then(didFulfill: any, didReject: any, ...args: any[]): any;
            thenReturn(value: any): any;
            thenThrow(reason: any): any;
            timeout(ms: any, message: any): any;
            toJSON(): any;
            value(): any;
        }
        namespace Promise {
            function RangeError(p0: any): any;
            namespace RangeError {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Promise.RangeError
                const captureStackTrace: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Promise.RangeError
                const stackTraceLimit: any;
            }
            function TypeError(p0: any): any;
            namespace TypeError {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Promise.TypeError
                const captureStackTrace: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Promise.TypeError
                const stackTraceLimit: any;
            }
            function coroutine(generatorFunction: any, options: any): any;
            namespace coroutine {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Promise.coroutine
                const addYieldHandler: any;
            }
        }
        class QueryError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(message: any);
            name: any;
        }
        class RANGE {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class REAL {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class SMALLINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class STRING {
            static BINARY: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class SequelizeScopeError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(parent: any);
            name: any;
        }
        class TEXT {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class TIME {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class TINYINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class TimeoutError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(parent: any);
            name: any;
        }
        class Transaction {
            static ISOLATION_LEVELS: any;
            static LOCK: any;
            static TYPES: any;
            // Circular reference from index.Sequelize.Sequelize.Transaction
            static Transaction: any;
            constructor(sequelize: any, options: any);
            sequelize: any;
            savepoints: any;
            options: any;
            parent: any;
            id: any;
            name: any;
            afterCommit(fn: any): void;
            begin(): any;
            cleanup(): any;
            commit(): any;
            prepareEnvironment(useCLS: any): any;
            rollback(): any;
            setDeferrable(): any;
            setIsolationLevel(): any;
        }
        class UUID {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any, options: any): any;
        }
        class UUIDV1 {
            static extend(oldType: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any, options: any): any;
        }
        class UUIDV4 {
            static extend(oldType: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any, options: any): any;
        }
        class UniqueConstraintError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(options: any);
            name: any;
            errors: any;
            fields: any;
            parent: any;
            original: any;
            sql: any;
            get(path: any): any;
        }
        namespace UniqueConstraintError {
            class ValidationErrorItem {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.UniqueConstraintError.ValidationErrorItem
                static Origins: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.UniqueConstraintError.ValidationErrorItem
                static TypeStringMap: any;
                constructor(message: any, type: any, path: any, value: any, inst: any, validatorKey: any, fnName: any, fnArgs: any);
                message: any;
                type: any;
                path: any;
                value: any;
                origin: any;
                instance: any;
                validatorKey: any;
                validatorName: any;
                validatorArgs: any;
            }
        }
        class UnknownConstraintError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(options: any);
            name: any;
            message: any;
            constraint: any;
            fields: any;
            table: any;
        }
        namespace Utils {
            class Cast {
                constructor(val: any, type: any, json: any);
                val: any;
                type: any;
                json: any;
            }
            class Col {
                constructor(col: any, args: any);
                col: any;
            }
            class Fn {
                constructor(fn: any, args: any);
                fn: any;
                args: any;
            }
            class Json {
                constructor(conditionsOrPath: any, value: any);
                conditions: any;
                path: any;
                value: any;
            }
            class Literal {
                constructor(val: any);
                val: any;
            }
            function Promise(executor: any): void;
            namespace Promise {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const AggregateError: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const CancellationError: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const OperationalError: any;
                // Circular reference from index.Sequelize.Sequelize.Utils.Promise
                const Promise: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const PromiseInspection: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const RangeError: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const RejectionError: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const TimeoutError: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const TypeError: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const all: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const any: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const attempt: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const bind: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const cast: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const config: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const coroutine: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const defer: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const delay: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const each: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const filter: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const fromCallback: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const fromNode: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const fulfilled: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const getNewLibraryCopy: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const hasLongStackTraces: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const is: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const join: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const longStackTraces: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const map: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const mapSeries: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const method: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const onPossiblyUnhandledRejection: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const onUnhandledRejectionHandled: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const pending: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const promisify: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const promisifyAll: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const props: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const race: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const reduce: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const reject: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const rejected: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const resolve: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const setScheduler: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const settle: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const some: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const spawn: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const using: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.Utils.Promise
                const version: any;
            }
            class SequelizeMethod {
            }
            const TICK_CHAR: string;
            class Where {
                constructor(attribute: any, comparator: any, logic: any);
                attribute: any;
                comparator: any;
                logic: any;
            }
            function addTicks(s: any, tickChar: any): any;
            function camelize(str: any): any;
            function camelizeIf(str: any, condition: any): any;
            function camelizeObjectKeys(obj: any): any;
            function canTreatArrayAsAnd(arr: any): any;
            function classToInvokable(Class: any): any;
            function cloneDeep(obj: any): any;
            function combineTableNames(tableName1: any, tableName2: any): any;
            function defaultValueSchemable(value: any): any;
            function defaults(object: any, sources: any): any;
            function flattenObjectDeep(value: any): any;
            function format(arr: any, dialect: any): any;
            function formatNamedParameters(sql: any, parameters: any, dialect: any): any;
            function generateEnumName(tableName: any, columnName: any): any;
            function getComplexKeys(obj: any): any;
            function getComplexSize(obj: any): any;
            function getOperators(obj: any): any;
            function intersects(arr1: any, arr2: any): any;
            function isColString(value: any): any;
            function isPrimitive(val: any): any;
            function isWhereEmpty(obj: any): any;
            function mapFinderOptions(options: any, Model: any): any;
            function mapOptionFieldNames(options: any, Model: any): any;
            function mapValueFieldNames(dataValues: any, fields: any, Model: any): any;
            function mapWhereFieldNames(attributes: any, Model: any): any;
            function merge(...args: any[]): any;
            function mergeDefaults(a: any, b: any): any;
            function nameIndex(index: any, tableName: any): any;
            function now(dialect: any): any;
            function pluralize(str: any): any;
            function removeNullValuesFromHash(hash: any, omitNull: any, options: any): any;
            function removeTicks(s: any, tickChar: any): any;
            function singularize(str: any): any;
            function spliceStr(str: any, index: any, count: any, add: any): any;
            function stack(): any;
            function toDefaultValue(value: any, dialect: any): any;
            function underscore(str: any): any;
            function underscoredIf(str: any, condition: any): any;
            function useInflection(_inflection: any): void;
        }
        class VIRTUAL {
            static extend(oldType: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class ValidationError {
            static captureStackTrace(p0: any, p1: any): any;
            static stackTraceLimit: number;
            constructor(message: any, errors: any);
            name: any;
            message: any;
            errors: any;
            get(path: any): any;
        }
        namespace ValidationError {
            class ValidationErrorItem {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.ValidationError.ValidationErrorItem
                static Origins: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.ValidationError.ValidationErrorItem
                static TypeStringMap: any;
                constructor(message: any, type: any, path: any, value: any, inst: any, validatorKey: any, fnName: any, fnArgs: any);
                message: any;
                type: any;
                path: any;
                value: any;
                origin: any;
                instance: any;
                validatorKey: any;
                validatorName: any;
                validatorArgs: any;
            }
        }
        class ValidationErrorItem {
            static Origins: {
                CORE: any;
                DB: any;
                FUNCTION: any;
            };
            static TypeStringMap: {
                "notnull violation": any;
                "string violation": any;
                "unique violation": any;
                "validation error": any;
            };
            constructor(message: any, type: any, path: any, value: any, inst: any, validatorKey: any, fnName: any, fnArgs: any);
            message: any;
            type: any;
            path: any;
            value: any;
            origin: any;
            instance: any;
            validatorKey: any;
            validatorName: any;
            validatorArgs: any;
            getValidatorKey(useTypeAsNS: any, NSSeparator: any): any;
        }
        namespace Validator {
            function blacklist(str: any, chars: any): any;
            function contains(str: any, elem: any): any;
            function equals(str: any, comparison: any): any;
            function escape(str: any): any;
            function extend(name: any, fn: any): any;
            function is(str: any, pattern: any, modifiers: any): any;
            function isAfter(str: any, ...args: any[]): any;
            function isAlpha(str: any, ...args: any[]): any;
            const isAlphaLocales: any[];
            function isAlphanumeric(str: any, ...args: any[]): any;
            const isAlphanumericLocales: any[];
            function isAscii(str: any): any;
            function isBase64(str: any): any;
            function isBefore(str: any, ...args: any[]): any;
            function isBoolean(str: any): any;
            function isByteLength(str: any, options: any, ...args: any[]): any;
            function isCreditCard(str: any): any;
            function isCurrency(str: any, options: any): any;
            function isDataURI(str: any): any;
            function isDate(dateString: any): any;
            function isDecimal(str: any): any;
            function isDivisibleBy(str: any, num: any): any;
            function isEmail(str: any, options: any): any;
            function isEmpty(str: any, options: any): any;
            function isFQDN(str: any, options: any): any;
            function isFloat(str: any, options: any): any;
            const isFloatLocales: any[];
            function isFullWidth(str: any): any;
            function isHalfWidth(str: any): any;
            function isHash(str: any, algorithm: any): any;
            function isHexColor(str: any): any;
            function isHexadecimal(str: any): any;
            function isIP(str: any, ...args: any[]): any;
            function isIPRange(str: any): any;
            function isIPv4(str: any): any;
            function isIPv6(str: any): any;
            function isISBN(str: any, ...args: any[]): any;
            function isISIN(str: any): any;
            function isISO31661Alpha2(str: any): any;
            function isISO31661Alpha3(str: any): any;
            function isISO8601(str: any, options: any): any;
            function isISRC(str: any): any;
            function isISSN(str: any, ...args: any[]): any;
            function isIdentityCard(str: any, ...args: any[]): any;
            function isImmutable(value: any, validatorArgs: any, field: any, modelInstance: any): any;
            function isIn(str: any, options: any): any;
            function isInt(str: any, options: any): any;
            function isJSON(str: any): any;
            function isJWT(str: any): any;
            function isLatLong(str: any): any;
            function isLength(str: any, options: any, ...args: any[]): any;
            function isLowercase(str: any): any;
            function isMACAddress(str: any, options: any): any;
            function isMD5(str: any): any;
            function isMagnetURI(url: any): any;
            function isMimeType(str: any): any;
            function isMobilePhone(str: any, locale: any, options: any): any;
            const isMobilePhoneLocales: any[];
            function isMongoId(str: any): any;
            function isMultibyte(str: any): any;
            function isNull(str: any, options: any): any;
            function isNumeric(str: any, options: any): any;
            function isPort(str: any): any;
            function isPostalCode(str: any, locale: any): any;
            const isPostalCodeLocales: any[];
            function isRFC3339(str: any): any;
            function isSurrogatePair(str: any): any;
            function isURL(url: any, options: any): any;
            function isUUID(str: any, ...args: any[]): any;
            function isUppercase(str: any): any;
            function isUrl(str: any): any;
            function isVariableWidth(str: any): any;
            function isWhitelisted(str: any, chars: any): any;
            function len(str: any, min: any, max: any): any;
            function ltrim(str: any, chars: any): any;
            function matches(str: any, pattern: any, modifiers: any): any;
            function max(str: any, val: any): any;
            function min(str: any, val: any): any;
            function normalizeEmail(email: any, options: any): any;
            function not(str: any, pattern: any, modifiers: any): any;
            function notContains(str: any, elem: any): any;
            function notEmpty(str: any): any;
            function notIn(str: any, values: any): any;
            function notNull(val: any): any;
            function notRegex(str: any, pattern: any, modifiers: any): any;
            function regex(str: any, pattern: any, modifiers: any): any;
            function rtrim(str: any, chars: any): any;
            function stripLow(str: any, keep_new_lines: any): any;
            function toBoolean(str: any, strict: any): any;
            function toDate(date: any): any;
            function toFloat(str: any): any;
            function toInt(str: any, radix: any): any;
            function toString(input: any): any;
            function trim(str: any, chars: any): any;
            function unescape(str: any): any;
            const version: string;
            function whitelist(str: any, chars: any): any;
        }
        namespace mariadb {
            function DATE(): any;
            namespace DATE {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.DATE
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.DATE
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.DATE
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.DATE
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.DATE
                const warn: any;
            }
            function DATEONLY(): any;
            namespace DATEONLY {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.DATEONLY
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.DATEONLY
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.DATEONLY
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.DATEONLY
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.DATEONLY
                const warn: any;
            }
            function DECIMAL(): any;
            namespace DECIMAL {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.DECIMAL
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.DECIMAL
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.DECIMAL
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.DECIMAL
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.DECIMAL
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.DECIMAL
                const warn: any;
            }
            function ENUM(): any;
            namespace ENUM {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.ENUM
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.ENUM
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.ENUM
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.ENUM
                const warn: any;
            }
            function GEOMETRY(p0: any, p1: any): any;
            namespace GEOMETRY {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.GEOMETRY
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.GEOMETRY
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.GEOMETRY
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.GEOMETRY
                const warn: any;
            }
            function JSON(): any;
            namespace JSON {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.JSON
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.JSON
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.JSON
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.JSON
                const warn: any;
            }
            function UUID(): any;
            namespace UUID {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.UUID
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.UUID
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.UUID
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mariadb.UUID
                const warn: any;
            }
        }
        namespace mssql {
            function BIGINT(p0: any): any;
            namespace BIGINT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.BIGINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.BIGINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.BIGINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.BIGINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.BIGINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.BIGINT
                const warn: any;
            }
            function BLOB(): any;
            namespace BLOB {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.BLOB
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.BLOB
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.BLOB
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.BLOB
                const warn: any;
            }
            function BOOLEAN(): any;
            namespace BOOLEAN {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.BOOLEAN
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.BOOLEAN
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.BOOLEAN
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.BOOLEAN
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.BOOLEAN
                const warn: any;
            }
            function DATE(): any;
            namespace DATE {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.DATE
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.DATE
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.DATE
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.DATE
                const warn: any;
            }
            function DATEONLY(): any;
            namespace DATEONLY {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.DATEONLY
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.DATEONLY
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.DATEONLY
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.DATEONLY
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.DATEONLY
                const warn: any;
            }
            function ENUM(): any;
            namespace ENUM {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.ENUM
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.ENUM
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.ENUM
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.ENUM
                const warn: any;
            }
            function FLOAT(p0: any, p1: any): any;
            namespace FLOAT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.FLOAT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.FLOAT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.FLOAT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.FLOAT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.FLOAT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.FLOAT
                const warn: any;
            }
            function INTEGER(p0: any): any;
            namespace INTEGER {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.INTEGER
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.INTEGER
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.INTEGER
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.INTEGER
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.INTEGER
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.INTEGER
                const warn: any;
            }
            function NOW(): any;
            namespace NOW {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.NOW
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.NOW
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.NOW
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.NOW
                const warn: any;
            }
            function REAL(p0: any, p1: any): any;
            namespace REAL {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.REAL
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.REAL
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.REAL
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.REAL
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.REAL
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.REAL
                const warn: any;
            }
            function SMALLINT(p0: any): any;
            namespace SMALLINT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.SMALLINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.SMALLINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.SMALLINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.SMALLINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.SMALLINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.SMALLINT
                const warn: any;
            }
            function STRING(): any;
            namespace STRING {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.STRING
                const BINARY: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.STRING
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.STRING
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.STRING
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.STRING
                const warn: any;
            }
            function TEXT(): any;
            namespace TEXT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.TEXT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.TEXT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.TEXT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.TEXT
                const warn: any;
            }
            function TINYINT(p0: any): any;
            namespace TINYINT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.TINYINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.TINYINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.TINYINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.TINYINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.TINYINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.TINYINT
                const warn: any;
            }
            function UUID(): any;
            namespace UUID {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.UUID
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.UUID
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.UUID
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mssql.UUID
                const warn: any;
            }
        }
        namespace mysql {
            function DATE(): any;
            namespace DATE {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.DATE
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.DATE
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.DATE
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.DATE
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.DATE
                const warn: any;
            }
            function DATEONLY(): any;
            namespace DATEONLY {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.DATEONLY
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.DATEONLY
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.DATEONLY
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.DATEONLY
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.DATEONLY
                const warn: any;
            }
            function DECIMAL(): any;
            namespace DECIMAL {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.DECIMAL
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.DECIMAL
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.DECIMAL
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.DECIMAL
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.DECIMAL
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.DECIMAL
                const warn: any;
            }
            function ENUM(): any;
            namespace ENUM {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.ENUM
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.ENUM
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.ENUM
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.ENUM
                const warn: any;
            }
            function GEOMETRY(p0: any, p1: any): any;
            namespace GEOMETRY {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.GEOMETRY
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.GEOMETRY
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.GEOMETRY
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.GEOMETRY
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.GEOMETRY
                const warn: any;
            }
            function JSON(): any;
            namespace JSON {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.JSON
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.JSON
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.JSON
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.JSON
                const warn: any;
            }
            function UUID(): any;
            namespace UUID {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.UUID
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.UUID
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.UUID
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.mysql.UUID
                const warn: any;
            }
        }
        namespace postgres {
            function BIGINT(p0: any): any;
            namespace BIGINT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.BIGINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.BIGINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.BIGINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.BIGINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.BIGINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.BIGINT
                const warn: any;
            }
            function BLOB(): any;
            namespace BLOB {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.BLOB
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.BLOB
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.BLOB
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.BLOB
                const warn: any;
            }
            function BOOLEAN(): any;
            namespace BOOLEAN {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.BOOLEAN
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.BOOLEAN
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.BOOLEAN
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.BOOLEAN
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.BOOLEAN
                const warn: any;
            }
            function CHAR(): any;
            namespace CHAR {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.CHAR
                const BINARY: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.CHAR
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.CHAR
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.CHAR
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.CHAR
                const warn: any;
            }
            function CITEXT(): any;
            namespace CITEXT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.CITEXT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.CITEXT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.CITEXT
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.CITEXT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.CITEXT
                const warn: any;
            }
            function DATE(): any;
            namespace DATE {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.DATE
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.DATE
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.DATE
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.DATE
                const warn: any;
            }
            function DATEONLY(): any;
            namespace DATEONLY {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.DATEONLY
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.DATEONLY
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.DATEONLY
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.DATEONLY
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.DATEONLY
                const warn: any;
            }
            function DECIMAL(): any;
            namespace DECIMAL {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.DECIMAL
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.DECIMAL
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.DECIMAL
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.DECIMAL
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.DECIMAL
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.DECIMAL
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.DECIMAL
                const warn: any;
            }
            function ENUM(): any;
            namespace ENUM {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.ENUM
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.ENUM
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.ENUM
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.ENUM
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.ENUM
                const warn: any;
            }
            function FLOAT(p0: any, p1: any): any;
            namespace FLOAT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.FLOAT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.FLOAT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.FLOAT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.FLOAT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.FLOAT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.FLOAT
                const warn: any;
            }
            function GEOGRAPHY(): any;
            namespace GEOGRAPHY {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.GEOGRAPHY
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.GEOGRAPHY
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.GEOGRAPHY
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.GEOGRAPHY
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.GEOGRAPHY
                const warn: any;
            }
            function GEOMETRY(): any;
            namespace GEOMETRY {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.GEOMETRY
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.GEOMETRY
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.GEOMETRY
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.GEOMETRY
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.GEOMETRY
                const warn: any;
            }
            function HSTORE(): any;
            namespace HSTORE {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.HSTORE
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.HSTORE
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.HSTORE
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.HSTORE
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.HSTORE
                const warn: any;
            }
            function INTEGER(p0: any): any;
            namespace INTEGER {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.INTEGER
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.INTEGER
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.INTEGER
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.INTEGER
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.INTEGER
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.INTEGER
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.INTEGER
                const warn: any;
            }
            function RANGE(): any;
            namespace RANGE {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.RANGE
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.RANGE
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.RANGE
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.RANGE
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.RANGE
                const warn: any;
            }
            function REAL(p0: any): any;
            namespace REAL {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.REAL
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.REAL
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.REAL
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.REAL
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.REAL
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.REAL
                const warn: any;
            }
            function SMALLINT(p0: any): any;
            namespace SMALLINT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.SMALLINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.SMALLINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.SMALLINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.SMALLINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.SMALLINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.SMALLINT
                const warn: any;
            }
            function STRING(): any;
            namespace STRING {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.STRING
                const BINARY: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.STRING
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.STRING
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.STRING
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.STRING
                const warn: any;
            }
            function TEXT(): any;
            namespace TEXT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.TEXT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.TEXT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.TEXT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.TEXT
                const warn: any;
            }
            function TINYINT(p0: any): any;
            namespace TINYINT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.TINYINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.TINYINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.TINYINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.TINYINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.TINYINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.postgres.TINYINT
                const warn: any;
            }
        }
        namespace sqlite {
            function BIGINT(p0: any): any;
            namespace BIGINT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.BIGINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.BIGINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.BIGINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.BIGINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.BIGINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.BIGINT
                const warn: any;
            }
            function CHAR(): any;
            namespace CHAR {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.CHAR
                const BINARY: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.CHAR
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.CHAR
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.CHAR
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.CHAR
                const warn: any;
            }
            function CITEXT(): any;
            namespace CITEXT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.CITEXT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.CITEXT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.CITEXT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.CITEXT
                const warn: any;
            }
            function DATE(): any;
            namespace DATE {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.DATE
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.DATE
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.DATE
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.DATE
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.DATE
                const warn: any;
            }
            function DATEONLY(): any;
            namespace DATEONLY {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.DATEONLY
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.DATEONLY
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.DATEONLY
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.DATEONLY
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.DATEONLY
                const warn: any;
            }
            function ENUM(): any;
            namespace ENUM {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.ENUM
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.ENUM
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.ENUM
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.ENUM
                const warn: any;
            }
            function FLOAT(): any;
            namespace FLOAT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.FLOAT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.FLOAT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.FLOAT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.FLOAT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.FLOAT
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.FLOAT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.FLOAT
                const warn: any;
            }
            function INTEGER(p0: any): any;
            namespace INTEGER {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.INTEGER
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.INTEGER
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.INTEGER
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.INTEGER
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.INTEGER
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.INTEGER
                const warn: any;
            }
            function JSON(): any;
            namespace JSON {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.JSON
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.JSON
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.JSON
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.JSON
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.JSON
                const warn: any;
            }
            function MEDIUMINT(p0: any): any;
            namespace MEDIUMINT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.MEDIUMINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.MEDIUMINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.MEDIUMINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.MEDIUMINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.MEDIUMINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.MEDIUMINT
                const warn: any;
            }
            function NUMBER(): any;
            namespace NUMBER {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.NUMBER
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.NUMBER
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.NUMBER
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.NUMBER
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.NUMBER
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.NUMBER
                const warn: any;
            }
            function REAL(): any;
            namespace REAL {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.REAL
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.REAL
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.REAL
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.REAL
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.REAL
                const parse: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.REAL
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.REAL
                const warn: any;
            }
            function SMALLINT(p0: any): any;
            namespace SMALLINT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.SMALLINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.SMALLINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.SMALLINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.SMALLINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.SMALLINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.SMALLINT
                const warn: any;
            }
            function STRING(): any;
            namespace STRING {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.STRING
                const BINARY: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.STRING
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.STRING
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.STRING
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.STRING
                const warn: any;
            }
            function TEXT(): any;
            namespace TEXT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.TEXT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.TEXT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.TEXT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.TEXT
                const warn: any;
            }
            function TINYINT(p0: any): any;
            namespace TINYINT {
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.TINYINT
                const UNSIGNED: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.TINYINT
                const ZEROFILL: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.TINYINT
                const extend: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.TINYINT
                const key: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.TINYINT
                const types: any;
                // Too-deep object hierarchy from index.Sequelize.Sequelize.sqlite.TINYINT
                const warn: any;
            }
        }
    }
    class SequelizeScopeError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(parent: any);
        name: any;
    }
    class TEXT {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: boolean;
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        constructor(p0: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class TIME {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
    }
    class TINYINT {
        static UNSIGNED: any;
        static ZEROFILL: any;
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: any[];
            mssql: any[];
            mysql: any[];
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any): any;
    }
    class TimeoutError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(parent: any);
        name: any;
    }
    class Transaction {
        static ISOLATION_LEVELS: any;
        static LOCK: any;
        static TYPES: any;
        // Circular reference from index.Sequelize.Transaction
        static Transaction: any;
        constructor(sequelize: any, options: any);
        sequelize: any;
        savepoints: any;
        options: any;
        parent: any;
        id: any;
        name: any;
        afterCommit(fn: any): void;
        begin(): any;
        cleanup(): any;
        commit(): any;
        prepareEnvironment(useCLS: any): any;
        rollback(): any;
        setDeferrable(): any;
        setIsolationLevel(): any;
    }
    class UUID {
        static extend(oldType: any): any;
        static key: string;
        static types: {
            mariadb: boolean;
            mssql: boolean;
            mysql: boolean;
            postgres: any[];
            sqlite: any[];
        };
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any, options: any): any;
    }
    class UUIDV1 {
        static extend(oldType: any): any;
        static key: string;
        static types: {};
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any, options: any): any;
    }
    class UUIDV4 {
        static extend(oldType: any): any;
        static key: string;
        static types: {};
        static warn(link: any, text: any): void;
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
        validate(value: any, options: any): any;
    }
    class UniqueConstraintError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(options: any);
        name: any;
        errors: any;
        fields: any;
        parent: any;
        original: any;
        sql: any;
        get(path: any): any;
    }
    namespace UniqueConstraintError {
        class ValidationErrorItem {
            static Origins: {
                CORE: any;
                DB: any;
                FUNCTION: any;
            };
            static TypeStringMap: {
                "notnull violation": any;
                "string violation": any;
                "unique violation": any;
                "validation error": any;
            };
            constructor(message: any, type: any, path: any, value: any, inst: any, validatorKey: any, fnName: any, fnArgs: any);
            message: any;
            type: any;
            path: any;
            value: any;
            origin: any;
            instance: any;
            validatorKey: any;
            validatorName: any;
            validatorArgs: any;
            getValidatorKey(useTypeAsNS: any, NSSeparator: any): any;
        }
    }
    class UnknownConstraintError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(options: any);
        name: any;
        message: any;
        constraint: any;
        fields: any;
        table: any;
    }
    namespace Utils {
        class Cast {
            constructor(val: any, type: any, json: any);
            val: any;
            type: any;
            json: any;
        }
        class Col {
            constructor(col: any, args: any);
            col: any;
        }
        class Fn {
            constructor(fn: any, args: any);
            fn: any;
            args: any;
            clone(): any;
        }
        class Json {
            constructor(conditionsOrPath: any, value: any);
            conditions: any;
            path: any;
            value: any;
        }
        class Literal {
            constructor(val: any);
            val: any;
        }
        class Promise {
            static AggregateError(message: any): any;
            static CancellationError(message: any): any;
            static OperationalError(message: any): any;
            // Circular reference from index.Sequelize.Utils.Promise
            static Promise: any;
            static PromiseInspection(promise: any): void;
            static RejectionError(message: any): any;
            static TimeoutError(message: any): any;
            static all(promises: any): any;
            static any(promises: any): any;
            static attempt(fn: any, ...args: any[]): any;
            static bind(thisArg: any, value: any): any;
            static cast(obj: any): any;
            static config(opts: any): any;
            static defer(): any;
            static delay(ms: any, value: any): any;
            static each(promises: any, fn: any): any;
            static filter(promises: any, fn: any, options: any): any;
            static fromCallback(fn: any, ...args: any[]): any;
            static fromNode(fn: any, ...args: any[]): any;
            static fulfilled(obj: any): any;
            static getNewLibraryCopy(): any;
            static hasLongStackTraces(): any;
            static is(val: any): any;
            static join(...args: any[]): any;
            static longStackTraces(): void;
            static map(promises: any, fn: any, options: any, _filter: any): any;
            static mapSeries(promises: any, fn: any): any;
            static method(fn: any): any;
            static onPossiblyUnhandledRejection(fn: any): void;
            static onUnhandledRejectionHandled(fn: any): void;
            static pending(): any;
            static promisify(fn: any, options: any): any;
            static promisifyAll(target: any, options: any): any;
            static props(promises: any): any;
            static race(promises: any): any;
            static reduce(promises: any, fn: any, initialValue: any, _each: any): any;
            static reject(reason: any): any;
            static rejected(reason: any): any;
            static resolve(obj: any): any;
            static setScheduler(fn: any): any;
            static settle(promises: any): any;
            static some(promises: any, howMany: any): any;
            static spawn(generatorFunction: any): any;
            static using(...args: any[]): any;
            static version: string;
            constructor(executor: any);
            all(...args: any[]): any;
            any(): any;
            asCallback(nodeback: any, options: any): any;
            bind(thisArg: any): any;
            call(methodName: any, ...args: any[]): any;
            cancel(): any;
            catchReturn(value: any, ...args: any[]): any;
            catchThrow(reason: any, ...args: any[]): any;
            caught(fn: any, ...args: any[]): any;
            delay(ms: any): any;
            disposer(fn: any): any;
            done(didFulfill: any, didReject: any): void;
            each(fn: any): any;
            error(fn: any): any;
            filter(fn: any, options: any): any;
            get(propertyName: any): any;
            isCancellable(): any;
            isCancelled(): any;
            isFulfilled(): any;
            isPending(): any;
            isRejected(): any;
            isResolved(): any;
            lastly(handler: any): any;
            map(fn: any, options: any): any;
            mapSeries(fn: any): any;
            nodeify(nodeback: any, options: any): any;
            props(): any;
            race(): any;
            reason(): any;
            reduce(fn: any, initialValue: any): any;
            reflect(): any;
            settle(): any;
            some(howMany: any): any;
            spread(fn: any): any;
            suppressUnhandledRejections(): void;
            tap(handler: any): any;
            tapCatch(handlerOrPredicate: any, ...args: any[]): any;
            then(didFulfill: any, didReject: any, ...args: any[]): any;
            thenReturn(value: any): any;
            thenThrow(reason: any): any;
            timeout(ms: any, message: any): any;
            toJSON(): any;
            value(): any;
        }
        namespace Promise {
            function RangeError(p0: any): any;
            namespace RangeError {
                // Too-deep object hierarchy from index.Sequelize.Utils.Promise.RangeError
                const captureStackTrace: any;
                // Too-deep object hierarchy from index.Sequelize.Utils.Promise.RangeError
                const stackTraceLimit: any;
            }
            function TypeError(p0: any): any;
            namespace TypeError {
                // Too-deep object hierarchy from index.Sequelize.Utils.Promise.TypeError
                const captureStackTrace: any;
                // Too-deep object hierarchy from index.Sequelize.Utils.Promise.TypeError
                const stackTraceLimit: any;
            }
            function coroutine(generatorFunction: any, options: any): any;
            namespace coroutine {
                // Too-deep object hierarchy from index.Sequelize.Utils.Promise.coroutine
                const addYieldHandler: any;
            }
        }
        class SequelizeMethod {
        }
        const TICK_CHAR: string;
        class Where {
            constructor(attribute: any, comparator: any, logic: any);
            attribute: any;
            comparator: any;
            logic: any;
        }
        function addTicks(s: any, tickChar: any): any;
        function camelize(str: any): any;
        function camelizeIf(str: any, condition: any): any;
        function camelizeObjectKeys(obj: any): any;
        function canTreatArrayAsAnd(arr: any): any;
        function classToInvokable(Class: any): any;
        function cloneDeep(obj: any): any;
        function combineTableNames(tableName1: any, tableName2: any): any;
        function defaultValueSchemable(value: any): any;
        function defaults(object: any, sources: any): any;
        function flattenObjectDeep(value: any): any;
        function format(arr: any, dialect: any): any;
        function formatNamedParameters(sql: any, parameters: any, dialect: any): any;
        function generateEnumName(tableName: any, columnName: any): any;
        function getComplexKeys(obj: any): any;
        function getComplexSize(obj: any): any;
        function getOperators(obj: any): any;
        function intersects(arr1: any, arr2: any): any;
        function isColString(value: any): any;
        function isPrimitive(val: any): any;
        function isWhereEmpty(obj: any): any;
        function mapFinderOptions(options: any, Model: any): any;
        function mapOptionFieldNames(options: any, Model: any): any;
        function mapValueFieldNames(dataValues: any, fields: any, Model: any): any;
        function mapWhereFieldNames(attributes: any, Model: any): any;
        function merge(...args: any[]): any;
        function mergeDefaults(a: any, b: any): any;
        function nameIndex(index: any, tableName: any): any;
        function now(dialect: any): any;
        function pluralize(str: any): any;
        function removeNullValuesFromHash(hash: any, omitNull: any, options: any): any;
        function removeTicks(s: any, tickChar: any): any;
        function singularize(str: any): any;
        function spliceStr(str: any, index: any, count: any, add: any): any;
        function stack(): any;
        function toDefaultValue(value: any, dialect: any): any;
        function underscore(str: any): any;
        function underscoredIf(str: any, condition: any): any;
        function useInflection(_inflection: any): void;
    }
    class VIRTUAL {
        static extend(oldType: any): any;
        static key: string;
        static types: {};
        static warn(link: any, text: any): void;
        constructor(p0: any, p1: any);
        bindParam(value: any, options: any): any;
        stringify(value: any, options: any): any;
        toSql(): any;
        toString(options: any): any;
    }
    class ValidationError {
        static captureStackTrace(p0: any, p1: any): any;
        static stackTraceLimit: number;
        constructor(message: any, errors: any);
        name: any;
        message: any;
        errors: any;
        get(path: any): any;
    }
    namespace ValidationError {
        class ValidationErrorItem {
            static Origins: {
                CORE: any;
                DB: any;
                FUNCTION: any;
            };
            static TypeStringMap: {
                "notnull violation": any;
                "string violation": any;
                "unique violation": any;
                "validation error": any;
            };
            constructor(message: any, type: any, path: any, value: any, inst: any, validatorKey: any, fnName: any, fnArgs: any);
            message: any;
            type: any;
            path: any;
            value: any;
            origin: any;
            instance: any;
            validatorKey: any;
            validatorName: any;
            validatorArgs: any;
            getValidatorKey(useTypeAsNS: any, NSSeparator: any): any;
        }
    }
    class ValidationErrorItem {
        static Origins: {
            CORE: string;
            DB: string;
            FUNCTION: string;
        };
        static TypeStringMap: {
            "notnull violation": string;
            "string violation": string;
            "unique violation": string;
            "validation error": string;
        };
        constructor(message: any, type: any, path: any, value: any, inst: any, validatorKey: any, fnName: any, fnArgs: any);
        message: any;
        type: any;
        path: any;
        value: any;
        origin: any;
        instance: any;
        validatorKey: any;
        validatorName: any;
        validatorArgs: any;
        getValidatorKey(useTypeAsNS: any, NSSeparator: any): any;
    }
    namespace Validator {
        function blacklist(str: any, chars: any): any;
        function contains(str: any, elem: any): any;
        function equals(str: any, comparison: any): any;
        function escape(str: any): any;
        function extend(name: any, fn: any): any;
        function is(str: any, pattern: any, modifiers: any): any;
        function isAfter(str: any, ...args: any[]): any;
        function isAlpha(str: any, ...args: any[]): any;
        const isAlphaLocales: string[];
        function isAlphanumeric(str: any, ...args: any[]): any;
        const isAlphanumericLocales: string[];
        function isAscii(str: any): any;
        function isBase64(str: any): any;
        function isBefore(str: any, ...args: any[]): any;
        function isBoolean(str: any): any;
        function isByteLength(str: any, options: any, ...args: any[]): any;
        function isCreditCard(str: any): any;
        function isCurrency(str: any, options: any): any;
        function isDataURI(str: any): any;
        function isDate(dateString: any): any;
        function isDecimal(str: any): any;
        function isDivisibleBy(str: any, num: any): any;
        function isEmail(str: any, options: any): any;
        function isEmpty(str: any, options: any): any;
        function isFQDN(str: any, options: any): any;
        function isFloat(str: any, options: any): any;
        const isFloatLocales: string[];
        function isFullWidth(str: any): any;
        function isHalfWidth(str: any): any;
        function isHash(str: any, algorithm: any): any;
        function isHexColor(str: any): any;
        function isHexadecimal(str: any): any;
        function isIP(str: any, ...args: any[]): any;
        function isIPRange(str: any): any;
        function isIPv4(str: any): any;
        function isIPv6(str: any): any;
        function isISBN(str: any, ...args: any[]): any;
        function isISIN(str: any): any;
        function isISO31661Alpha2(str: any): any;
        function isISO31661Alpha3(str: any): any;
        function isISO8601(str: any, options: any): any;
        function isISRC(str: any): any;
        function isISSN(str: any, ...args: any[]): any;
        function isIdentityCard(str: any, ...args: any[]): any;
        function isImmutable(value: any, validatorArgs: any, field: any, modelInstance: any): any;
        function isIn(str: any, options: any): any;
        function isInt(str: any, options: any): any;
        function isJSON(str: any): any;
        function isJWT(str: any): any;
        function isLatLong(str: any): any;
        function isLength(str: any, options: any, ...args: any[]): any;
        function isLowercase(str: any): any;
        function isMACAddress(str: any, options: any): any;
        function isMD5(str: any): any;
        function isMagnetURI(url: any): any;
        function isMimeType(str: any): any;
        function isMobilePhone(str: any, locale: any, options: any): any;
        const isMobilePhoneLocales: string[];
        function isMongoId(str: any): any;
        function isMultibyte(str: any): any;
        function isNull(str: any, options: any): any;
        function isNumeric(str: any, options: any): any;
        function isPort(str: any): any;
        function isPostalCode(str: any, locale: any): any;
        const isPostalCodeLocales: string[];
        function isRFC3339(str: any): any;
        function isSurrogatePair(str: any): any;
        function isURL(url: any, options: any): any;
        function isUUID(str: any, ...args: any[]): any;
        function isUppercase(str: any): any;
        function isUrl(str: any): any;
        function isVariableWidth(str: any): any;
        function isWhitelisted(str: any, chars: any): any;
        function len(str: any, min: any, max: any): any;
        function ltrim(str: any, chars: any): any;
        function matches(str: any, pattern: any, modifiers: any): any;
        function max(str: any, val: any): any;
        function min(str: any, val: any): any;
        function normalizeEmail(email: any, options: any): any;
        function not(str: any, pattern: any, modifiers: any): any;
        function notContains(str: any, elem: any): any;
        function notEmpty(str: any): any;
        function notIn(str: any, values: any): any;
        function notNull(val: any): any;
        function notRegex(str: any, pattern: any, modifiers: any): any;
        function regex(str: any, pattern: any, modifiers: any): any;
        function rtrim(str: any, chars: any): any;
        function stripLow(str: any, keep_new_lines: any): any;
        function toBoolean(str: any, strict: any): any;
        function toDate(date: any): any;
        function toFloat(str: any): any;
        function toInt(str: any, radix: any): any;
        function toString(input: any): any;
        function trim(str: any, chars: any): any;
        function unescape(str: any): any;
        const version: string;
        function whitelist(str: any, chars: any): any;
    }
    namespace mariadb {
        class DATE {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any, options: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DATEONLY {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class DECIMAL {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class ENUM {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(options: any): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class GEOMETRY {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class JSON {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(): any;
        }
        class UUID {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any, options: any): any;
        }
    }
    namespace mssql {
        class BIGINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class BLOB {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class BOOLEAN {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DATE {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DATEONLY {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class ENUM {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class FLOAT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class INTEGER {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class NOW {
            static extend(oldType: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class REAL {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class SMALLINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class STRING {
            static BINARY: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class TEXT {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class TINYINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class UUID {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any, options: any): any;
        }
    }
    namespace mysql {
        class DATE {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any, options: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DATEONLY {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class DECIMAL {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class ENUM {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(options: any): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class GEOMETRY {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class JSON {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(): any;
        }
        class UUID {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any, options: any): any;
        }
    }
    namespace postgres {
        class BIGINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class BLOB {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class BOOLEAN {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class CHAR {
            static BINARY: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class CITEXT {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DATE {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DATEONLY {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class DECIMAL {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class ENUM {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class FLOAT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any, p1: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class GEOGRAPHY {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class GEOMETRY {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class HSTORE {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class INTEGER {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class RANGE {
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any, options: any): any;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toCastType(): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class REAL {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class SMALLINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class STRING {
            static BINARY: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class TEXT {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class TINYINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
    }
    namespace sqlite {
        class BIGINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class CHAR {
            static BINARY: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class CITEXT {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                postgres: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DATE {
            static extend(oldType: any): any;
            static key: string;
            static parse(date: any, options: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class DATEONLY {
            static extend(oldType: any): any;
            static key: string;
            static parse(date: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
        }
        class ENUM {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class FLOAT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class INTEGER {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class JSON {
            static extend(oldType: any): any;
            static key: string;
            static parse(data: any): any;
            static types: {
                mariadb: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(): any;
        }
        class MEDIUMINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class NUMBER {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {};
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class REAL {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static parse(value: any): any;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class SMALLINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class STRING {
            static BINARY: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class TEXT {
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
        class TINYINT {
            static UNSIGNED: any;
            static ZEROFILL: any;
            static extend(oldType: any): any;
            static key: string;
            static types: {
                mariadb: any;
                mssql: any;
                mysql: any;
                postgres: any;
                sqlite: any;
            };
            static warn(link: any, text: any): void;
            constructor(p0: any);
            bindParam(value: any, options: any): any;
            stringify(value: any, options: any): any;
            toSql(): any;
            toString(options: any): any;
            validate(value: any): any;
        }
    }
}
export function Table(arg: any): any;
export function Unique(...args: any[]): any;
export function UpdatedAt(target: any, propertyName: any): void;
export function Validate(options: any): any;
export function ValidationFailed(...args: any[]): any;
export function Validator(target: any, propertyName: any, descriptor: any): void;
