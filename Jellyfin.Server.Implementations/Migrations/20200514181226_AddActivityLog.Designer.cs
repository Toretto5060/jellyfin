﻿#pragma warning disable CS1591

// <auto-generated />
using System;
using Jellyfin.Server.Implementations;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Jellyfin.Server.Implementations.Migrations
{
    [DbContext(typeof(JellyfinDb))]
    [Migration("20200514181226_AddActivityLog")]
    partial class AddActivityLog
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasDefaultSchema("jellyfin")
                .HasAnnotation("ProductVersion", "3.1.3");

            modelBuilder.Entity("Jellyfin.Data.Entities.ActivityLog", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("TEXT");

                    b.Property<string>("ItemId")
                        .HasColumnType("TEXT")
                        .HasMaxLength(256);

                    b.Property<int>("LogSeverity")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT")
                        .HasMaxLength(512);

                    b.Property<string>("Overview")
                        .HasColumnType("TEXT")
                        .HasMaxLength(512);

                    b.Property<uint>("RowVersion")
                        .IsConcurrencyToken()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ShortOverview")
                        .HasColumnType("TEXT")
                        .HasMaxLength(512);

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("TEXT")
                        .HasMaxLength(256);

                    b.Property<Guid>("UserId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("ActivityLogs");
                });
#pragma warning restore 612, 618
        }
    }
}
