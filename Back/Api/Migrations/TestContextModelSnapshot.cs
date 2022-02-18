﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Repository.Context;

namespace Api.Migrations
{
    [DbContext(typeof(TestContext))]
    partial class TestContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.14")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Core.Email.Email", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("EmailName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("emails");
                });

            modelBuilder.Entity("Core.Email.Message", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("MessageName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Subject")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("messages");
                });

            modelBuilder.Entity("Core.Email.MessageSended", b =>
                {
                    b.Property<DateTime>("SendedDate")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("MessageId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("EmailId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("SendedDate", "MessageId", "EmailId");

                    b.HasIndex("EmailId");

                    b.HasIndex("MessageId");

                    b.ToTable("MessageSended");
                });

            modelBuilder.Entity("Core.Email.MessageSended", b =>
                {
                    b.HasOne("Core.Email.Email", "email")
                        .WithMany("messageSended")
                        .HasForeignKey("EmailId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Core.Email.Message", "message")
                        .WithMany("messageSended")
                        .HasForeignKey("MessageId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("email");

                    b.Navigation("message");
                });

            modelBuilder.Entity("Core.Email.Email", b =>
                {
                    b.Navigation("messageSended");
                });

            modelBuilder.Entity("Core.Email.Message", b =>
                {
                    b.Navigation("messageSended");
                });
#pragma warning restore 612, 618
        }
    }
}
