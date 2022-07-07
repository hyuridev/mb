import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";

/**
 * Estrutura da tabela do banco de dados
 */

@Entity("users")
class Users {
    @PrimaryColumn()
    id: string | undefined;

    @Column()
    name: string | undefined;

    @Column()
    email: string | undefined;

    @Column()
    isAtivo: string | undefined;

    @CreateDateColumn()
    criadoEm: Date | undefined;

    @UpdateDateColumn()
    alteradoEm: Date | undefined;
}

export { Users };
