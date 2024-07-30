import { Cars } from "./Carros";
import  Locadora from "./Locadora";

Cars.belongsTo(Locadora, { foreignKey: 'locid', as: 'locadoras' })
Locadora.hasMany(Cars, {foreignKey: "locid"})

export {
    Cars,
    Locadora
}