using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Api.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Username = table.Column<string>(type: "TEXT", nullable: true),
                    Password = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "BirthdayCards",
                columns: table => new
                {
                    BirthdayCardId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Title = table.Column<string>(type: "TEXT", nullable: true),
                    Content = table.Column<string>(type: "TEXT", nullable: true),
                    ImageUrl = table.Column<string>(type: "TEXT", nullable: true),
                    UserId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BirthdayCards", x => x.BirthdayCardId);
                    table.ForeignKey(
                        name: "FK_BirthdayCards_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MediaCards",
                columns: table => new
                {
                    MediaCardId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Url = table.Column<string>(type: "TEXT", nullable: true),
                    UserId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MediaCards", x => x.MediaCardId);
                    table.ForeignKey(
                        name: "FK_MediaCards_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Queue",
                columns: table => new
                {
                    QueueId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CardType = table.Column<string>(type: "TEXT", nullable: true),
                    BirthdayCardId = table.Column<int>(type: "INTEGER", nullable: true),
                    MediaCardId = table.Column<int>(type: "INTEGER", nullable: true),
                    StartDate = table.Column<string>(type: "TEXT", nullable: true),
                    EndDate = table.Column<string>(type: "TEXT", nullable: true),
                    Duration = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Queue", x => x.QueueId);
                    table.ForeignKey(
                        name: "FK_Queue_BirthdayCards_BirthdayCardId",
                        column: x => x.BirthdayCardId,
                        principalTable: "BirthdayCards",
                        principalColumn: "BirthdayCardId");
                    table.ForeignKey(
                        name: "FK_Queue_MediaCards_MediaCardId",
                        column: x => x.MediaCardId,
                        principalTable: "MediaCards",
                        principalColumn: "MediaCardId");
                });

            migrationBuilder.CreateTable(
                name: "Histories",
                columns: table => new
                {
                    HistoryId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    QueueId = table.Column<int>(type: "INTEGER", nullable: true),
                    StartDate = table.Column<string>(type: "TEXT", nullable: true),
                    EndDate = table.Column<string>(type: "TEXT", nullable: true),
                    Duration = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Histories", x => x.HistoryId);
                    table.ForeignKey(
                        name: "FK_Histories_Queue_QueueId",
                        column: x => x.QueueId,
                        principalTable: "Queue",
                        principalColumn: "QueueId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_BirthdayCards_UserId",
                table: "BirthdayCards",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Histories_QueueId",
                table: "Histories",
                column: "QueueId");

            migrationBuilder.CreateIndex(
                name: "IX_MediaCards_UserId",
                table: "MediaCards",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Queue_BirthdayCardId",
                table: "Queue",
                column: "BirthdayCardId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Queue_MediaCardId",
                table: "Queue",
                column: "MediaCardId",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Histories");

            migrationBuilder.DropTable(
                name: "Queue");

            migrationBuilder.DropTable(
                name: "BirthdayCards");

            migrationBuilder.DropTable(
                name: "MediaCards");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
